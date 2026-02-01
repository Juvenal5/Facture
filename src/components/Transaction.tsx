"use client";

import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";

// Types
interface Transaction {
  id: number;
  type: TransactionType;
  category: string;
  description: string;
  amount: number;
  date: string;
  status: TransactionStatus;
}

interface FormData {
  type: TransactionType;
  category: string;
  description: string;
  amount: string;
  date: string;
  status: TransactionStatus;
}

interface ColorScheme {
  bg: string;
  text: string;
  badge: string;
}

interface Stats {
  total: number;
  completed: number;
  pending: number;
  totalRevenu: number;
  totalDepense: number;
}

interface TransactionProps {
  onBack?: () => void;
}

type TransactionType = "revenu" | "depense" | "facture" | "investissement" | "epargne";
type TransactionStatus = "completed" | "pending";
type FilterType = "all" | TransactionType;
type FilterStatus = "all" | TransactionStatus;
type SortBy = "date" | "amount" | "type";

export default function Transaction({ onBack }: TransactionProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [sortBy, setSortBy] = useState<SortBy>("date");

  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const [formData, setFormData] = useState<FormData>({
    type: "depense",
    category: "",
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    status: "completed",
  });

  const [allTransaction, setAllTransaction] = useState<Transaction[]>([]);

  const typeColors: Record<TransactionType, ColorScheme> = {
    revenu: { bg: "bg-emerald-100", text: "text-emerald-700", badge: "bg-emerald-500" },
    depense: { bg: "bg-orange-100", text: "text-orange-700", badge: "bg-orange-500" },
    facture: { bg: "bg-red-100", text: "text-red-700", badge: "bg-red-500" },
    investissement: { bg: "bg-blue-100", text: "text-blue-700", badge: "bg-blue-500" },
    epargne: { bg: "bg-yellow-100", text: "text-yellow-700", badge: "bg-yellow-500" },
  };

  const typeIcons: Record<TransactionType, string> = {
    revenu: "💰",
    depense: "🛒",
    facture: "📄",
    investissement: "📈",
    epargne: "🏦",
  };

  // =============================
  // API
  // =============================
  const fetchTransaction = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/transaction", { cache: "no-store" });
      if (!res.ok) throw new Error("Erreur lors du chargement des transactions");

      const data: Transaction[] = await res.json();
      setAllTransaction(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  // =============================
  // Helpers
  // =============================
  const resetForm = () => {
    setFormData({
      type: "depense",
      category: "",
      description: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      status: "completed",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  // =============================
  // Filtrage + tri (useMemo)
  // =============================
  const filteredTransaction = useMemo(() => {
    return allTransaction
      .filter((t) => {
        const matchesSearch =
          (t.description || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (t.category || "").toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filterType === "all" || t.type === filterType;
        const matchesStatus = filterStatus === "all" || t.status === filterStatus;

        return matchesSearch && matchesType && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sortBy === "amount") return Math.abs(b.amount) - Math.abs(a.amount);
        if (sortBy === "type") return a.type.localeCompare(b.type);
        return 0;
      });
  }, [allTransaction, searchTerm, filterType, filterStatus, sortBy]);

  // =============================
  // Stats (useMemo)
  // =============================
  const stats = useMemo((): Stats => {
    return {
      total: allTransaction.length,
      completed: allTransaction.filter((t) => t.status === "completed").length,
      pending: allTransaction.filter((t) => t.status === "pending").length,
      totalRevenu: allTransaction.filter((t) => t.type === "revenu").reduce((sum, t) => sum + t.amount, 0),
      totalDepense: allTransaction.filter((t) => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0),
    };
  }, [allTransaction]);

  // =============================
  // CRUD dynamique
  // =============================
  const handleAddTransaction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.category || !formData.description || !formData.amount) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    try {
      setSaving(true);

      const res = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Impossible d'ajouter la transaction");

      await fetchTransaction();
      resetForm();
      setShowAddModal(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur";
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const handleEditTransaction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingTransaction) return;

    try {
      setSaving(true);

      const res = await fetch(`/api/transactions/${editingTransaction.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Impossible de modifier la transaction");

      await fetchTransaction();
      resetForm();
      setShowEditModal(false);
      setEditingTransaction(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur";
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTransaction = async (id: number) => {
    if (!confirm("Voulez-vous vraiment supprimer cette transaction ?")) return;

    try {
      const res = await fetch(`/api/transactions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Impossible de supprimer");
      await fetchTransaction();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur";
      alert(errorMessage);
    }
  };

  const handleValidateTransaction = async (id: number) => {
    try {
      const res = await fetch(`/api/transactions/${id}/validate`, { method: "PATCH" });
      if (!res.ok) throw new Error("Impossible de valider");
      await fetchTransaction();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur";
      alert(errorMessage);
    }
  };

  const openEditForm = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      type: transaction.type,
      category: transaction.category,
      description: transaction.description,
      amount: Math.abs(transaction.amount).toString(),
      date: transaction.date,
      status: transaction.status,
    });
    setShowEditModal(true);
  };

  // Export CSV
  const exportToCSV = () => {
    const headers = ["Date", "Type", "Catégorie", "Description", "Montant", "Statut"];
    const rows = filteredTransaction.map((t) => [
      formatDate(t.date),
      t.type,
      t.category,
      t.description,
      t.amount.toString(),
      t.status,
    ]);

    const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  // =============================
  // UI
  // =============================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="px-4 py-2 rounded-xl font-semibold border-2 border-slate-200 hover:bg-slate-50 transition"
                >
                  ← Retour
                </button>
              )}

              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-amber-400">₣</span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-800">Transactions</h1>
                <p className="text-sm text-slate-500">Gérez toutes vos transactions financières</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={exportToCSV}
                className="px-4 py-3 rounded-xl font-semibold border-2 border-slate-200 hover:bg-slate-50 transition"
                title="Exporter en CSV"
              >
                📥 Exporter
              </button>

              <button
                onClick={fetchTransaction}
                className="px-4 py-3 rounded-xl font-semibold border-2 border-slate-200 hover:bg-slate-50 transition"
              >
                🔄 Actualiser
              </button>

              <button
                onClick={() => {
                  resetForm();
                  setShowAddModal(true);
                }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                + Nouvelle Transaction
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {/* message */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-medium">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
            <div className="text-5xl mb-3 animate-bounce">⏳</div>
            <p className="text-lg font-semibold text-slate-800">Chargement des transactions...</p>
          </div>
        ) : (
          <>
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <p className="text-sm font-medium text-slate-500 mb-2">Total Transactions</p>
                <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white transform transition-all duration-300 hover:scale-105">
                <p className="text-sm font-medium text-emerald-100 mb-2">Revenus</p>
                <p className="text-3xl font-bold">+{stats.totalRevenu.toLocaleString()} €</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-lg text-white transform transition-all duration-300 hover:scale-105">
                <p className="text-sm font-medium text-orange-100 mb-2">Dépenses</p>
                <p className="text-3xl font-bold">-{stats.totalDepense.toLocaleString()} €</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg text-white transform transition-all duration-300 hover:scale-105">
                <p className="text-sm font-medium text-blue-100 mb-2">Validées</p>
                <p className="text-3xl font-bold">{stats.completed}</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-lg text-white transform transition-all duration-300 hover:scale-105">
                <p className="text-sm font-medium text-yellow-100 mb-2">En attente</p>
                <p className="text-3xl font-bold">{stats.pending}</p>
              </div>
            </div>

            {/* Filtres */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Rechercher</label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Description, catégorie..."
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Type</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as FilterType)}
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="all">Tous les types</option>
                    <option value="revenu">💰 Revenu</option>
                    <option value="depense">🛒 Dépense</option>
                    <option value="facture">📄 Facture</option>
                    <option value="investissement">📈 Investissement</option>
                    <option value="epargne">🏦 Épargne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Statut</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="completed">✅ Validées</option>
                    <option value="pending">⏳ En attente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Trier par</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="date">📅 Date</option>
                    <option value="amount">💵 Montant</option>
                    <option value="type">🏷️ Type</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Liste */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">
                  Transactions ({filteredTransaction.length})
                </h2>
              </div>

              {filteredTransaction.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Aucune transaction trouvée</h3>
                  <p className="text-slate-600">Essayez de modifier vos filtres ou créez une nouvelle transaction</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Catégorie</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Description</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Montant</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Statut</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      {filteredTransaction.map((transaction) => {
                        const colors = typeColors[transaction.type] || typeColors.depense;

                        return (
                          <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-slate-600">{formatDate(transaction.date)}</td>

                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold ${colors.bg} ${colors.text}`}
                              >
                                {typeIcons[transaction.type] || "💳"}{" "}
                                {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                              </span>
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-slate-800">{transaction.category}</td>

                            <td className="px-6 py-4 text-sm text-slate-600">{transaction.description}</td>

                            <td className="px-6 py-4 text-right">
                              <span
                                className={`text-sm font-bold ${
                                  transaction.amount >= 0 ? "text-emerald-600" : "text-orange-600"
                                }`}
                              >
                                {transaction.amount >= 0 ? "+" : ""}
                                {transaction.amount.toLocaleString()} €
                              </span>
                            </td>

                            <td className="px-6 py-4 text-center">
                              {transaction.status === "completed" ? (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-700">
                                  ✅ Validée
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-yellow-100 text-yellow-700">
                                  ⏳ En attente
                                </span>
                              )}
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                {transaction.status === "pending" && (
                                  <button
                                    onClick={() => handleValidateTransaction(transaction.id)}
                                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                    title="Valider"
                                  >
                                    ✓
                                  </button>
                                )}

                                <button
                                  onClick={() => openEditForm(transaction)}
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  title="Modifier"
                                >
                                  ✏️
                                </button>

                                <button
                                  onClick={() => handleDeleteTransaction(transaction.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Supprimer"
                                >
                                  🗑️
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Modal Ajouter */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowAddModal(false);
                resetForm();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Nouvelle Transaction</h2>

            <form onSubmit={handleAddTransaction} className="space-y-4">
              {/* Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="revenu">💰 Revenu</option>
                  <option value="depense">🛒 Dépense</option>
                  <option value="facture">📄 Facture</option>
                  <option value="investissement">📈 Investissement</option>
                  <option value="epargne">🏦 Épargne</option>
                </select>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Catégorie <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Ex: Salaire, Shopping, etc."
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Ex: Salaire mensuel de janvier"
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                />
              </div>

              {/* Montant */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Montant (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <p className="text-xs text-slate-500 mt-1">
                  {formData.type === "revenu" ? "✓ Ce montant sera ajouté" : "⚠️ Ce montant sera déduit"}
                </p>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Statut */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Statut</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="completed">✅ Validée</option>
                  <option value="pending">⏳ En attente</option>
                </select>
              </div>

              <button
                disabled={saving}
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
              >
                {saving ? "Création..." : "Créer la Transaction"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Modifier */}
      {showEditModal && editingTransaction && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowEditModal(false);
                setEditingTransaction(null);
                resetForm();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Modifier la Transaction</h2>

            <form onSubmit={handleEditTransaction} className="space-y-4">
              {/* Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="revenu">💰 Revenu</option>
                  <option value="depense">🛒 Dépense</option>
                  <option value="facture">📄 Facture</option>
                  <option value="investissement">📈 Investissement</option>
                  <option value="epargne">🏦 Épargne</option>
                </select>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Catégorie <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Ex: Salaire, Shopping, etc."
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Ex: Salaire mensuel de janvier"
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                />
              </div>

              {/* Montant */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Montant (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <p className="text-xs text-slate-500 mt-1">
                  {formData.type === "revenu" ? "✓ Ce montant sera ajouté" : "⚠️ Ce montant sera déduit"}
                </p>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Statut */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Statut</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="completed">✅ Validée</option>
                  <option value="pending">⏳ En attente</option>
                </select>
              </div>

              <button
                disabled={saving}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
              >
                {saving ? "Enregistrement..." : "Enregistrer les modifications"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

