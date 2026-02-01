"use client";

import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";

const STORAGE_KEY = "budgets_v1";

// Types
interface Budget {
  id: number;
  category: string;
  allocated: number;
  spent: number;
  color: ColorKey;
  icon: string;
}

interface FormData {
  category: string;
  allocated: string;
  spent: number;
}

interface ColorScheme {
  bg: string;
  text: string;
  bar: string;
  gradient: string;
}

interface Status {
  text: string;
  color: string;
}

interface Advice {
  type: "warning" | "success" | "info";
  message: string;
}

type ColorKey = "purple" | "green" | "blue" | "pink" | "red" | "indigo" | "cyan" | "yellow" | "orange" | "rose";
type PeriodKey = "weekly" | "monthly" | "yearly";

export default function Budget() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>("monthly");
  const [showAddBudget, setShowAddBudget] = useState<boolean>(false);
  const [showEditBudget, setShowEditBudget] = useState<boolean>(false);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);

  const [selectedIcon, setSelectedIcon] = useState<string>("🏠");
  const [selectedColor, setSelectedColor] = useState<ColorKey>("purple");

  // Formulaire
  const [formData, setFormData] = useState<FormData>({
    category: "",
    allocated: "",
    spent: 0,
  });

  // Budgets (par défaut)
  const defaultBudgets: Budget[] = [
    { id: 1, category: "Logement", allocated: 1500, spent: 1200, color: "purple", icon: "🏠" },
    { id: 2, category: "Alimentation", allocated: 600, spent: 485, color: "green", icon: "🍔" },
    { id: 3, category: "Transport", allocated: 300, spent: 275, color: "blue", icon: "🚗" },
    { id: 4, category: "Loisirs", allocated: 400, spent: 520, color: "pink", icon: "🎮" },
    { id: 5, category: "Santé", allocated: 200, spent: 145, color: "red", icon: "🏥" },
    { id: 6, category: "Vêtements", allocated: 250, spent: 180, color: "indigo", icon: "👕" },
    { id: 7, category: "Télécom", allocated: 80, spent: 80, color: "cyan", icon: "📱" },
    { id: 8, category: "Énergie", allocated: 150, spent: 165, color: "yellow", icon: "⚡" },
    { id: 9, category: "Éducation", allocated: 300, spent: 120, color: "orange", icon: "📚" },
    { id: 10, category: "Cadeaux", allocated: 200, spent: 85, color: "rose", icon: "🎁" },
  ];

  const [budgets, setBudgets] = useState<Budget[]>(defaultBudgets);

  // Chargement depuis localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setBudgets(parsed);
      }
    } catch (e) {
      console.log("Erreur localStorage budgets:", e);
    }
  }, []);

  // Sauvegarde automatique
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));
    } catch (e) {
      console.log("Erreur localStorage budgets:", e);
    }
  }, [budgets]);

  const colorSchemes: Record<ColorKey, ColorScheme> = {
    purple: { bg: "bg-purple-100", text: "text-purple-700", bar: "bg-purple-500", gradient: "from-purple-500 to-purple-600" },
    green: { bg: "bg-green-100", text: "text-green-700", bar: "bg-green-500", gradient: "from-green-500 to-green-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-700", bar: "bg-blue-500", gradient: "from-blue-500 to-blue-600" },
    pink: { bg: "bg-pink-100", text: "text-pink-700", bar: "bg-pink-500", gradient: "from-pink-500 to-pink-600" },
    red: { bg: "bg-red-100", text: "text-red-700", bar: "bg-red-500", gradient: "from-red-500 to-red-600" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-700", bar: "bg-indigo-500", gradient: "from-indigo-500 to-indigo-600" },
    cyan: { bg: "bg-cyan-100", text: "text-cyan-700", bar: "bg-cyan-500", gradient: "from-cyan-500 to-cyan-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-700", bar: "bg-yellow-500", gradient: "from-yellow-500 to-yellow-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-700", bar: "bg-orange-500", gradient: "from-orange-500 to-orange-600" },
    rose: { bg: "bg-rose-100", text: "text-rose-700", bar: "bg-rose-500", gradient: "from-rose-500 to-rose-600" },
  };

  const availableIcons: string[] = ["🏠", "🍔", "🚗", "🎮", "🏥", "👕", "📱", "⚡", "📚", "🎁", "✈️", "🎵", "💼", "🏋️", "🎨", "🔧"];
  const availableColors: ColorKey[] = Object.keys(colorSchemes) as ColorKey[];

  // Calculs dynamiques
  const totalAllocated = useMemo(() => budgets.reduce((sum, b) => sum + Number(b.allocated || 0), 0), [budgets]);
  const totalSpent = useMemo(() => budgets.reduce((sum, b) => sum + Number(b.spent || 0), 0), [budgets]);
  const remaining = totalAllocated - totalSpent;
  const overBudget = useMemo(() => budgets.filter((b) => Number(b.spent) > Number(b.allocated)), [budgets]);

  const getPercentage = (spent: number, allocated: number): number => {
    const a = Number(allocated || 0);
    const s = Number(spent || 0);
    if (a <= 0) return 0;
    return Math.min((s / a) * 100, 100);
  };

  const getStatus = (spent: number, allocated: number): Status => {
    const a = Number(allocated || 0);
    const s = Number(spent || 0);
    if (a <= 0) return { text: "Non défini", color: "text-gray-600" };
    const percentage = (s / a) * 100;
    if (percentage >= 100) return { text: "Dépassé", color: "text-red-600" };
    if (percentage >= 80) return { text: "Attention", color: "text-orange-600" };
    return { text: "OK", color: "text-green-600" };
  };

  const periodLabel = useMemo(() => {
    if (selectedPeriod === "weekly") return "Cette semaine";
    if (selectedPeriod === "yearly") return "Cette année";
    return "Ce mois";
  }, [selectedPeriod]);

  // Form handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "allocated") {
      setFormData((prev) => ({ ...prev, allocated: value }));
      return;
    }

    if (name === "spent") {
      setFormData((prev) => ({ ...prev, spent: Number(value || 0) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ category: "", allocated: "", spent: 0 });
    setSelectedIcon("🏠");
    setSelectedColor("purple");
  };

  // CRUD operations
  const handleAddBudget = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allocatedNumber = Number(formData.allocated);
    if (!formData.category?.trim() || !allocatedNumber || allocatedNumber <= 0) {
      alert("Veuillez entrer une catégorie et un montant alloué valide");
      return;
    }

    const newBudget: Budget = {
      id: Date.now(),
      category: formData.category.trim(),
      allocated: allocatedNumber,
      spent: Number(formData.spent || 0),
      icon: selectedIcon,
      color: selectedColor,
    };

    setBudgets((prev) => [...prev, newBudget]);
    resetForm();
    setShowAddBudget(false);
  };

  const openEditForm = (budget: Budget) => {
    setEditingBudget(budget);
    setFormData({
      category: budget.category,
      allocated: String(budget.allocated),
      spent: Number(budget.spent || 0),
    });
    setSelectedIcon(budget.icon);
    setSelectedColor(budget.color);
    setShowEditBudget(true);
  };

  const handleEditBudget = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingBudget) return;

    const allocatedNumber = Number(formData.allocated);
    if (!formData.category?.trim() || !allocatedNumber || allocatedNumber <= 0) {
      alert("Veuillez entrer une catégorie et un montant alloué valide");
      return;
    }

    setBudgets((prev) =>
      prev.map((b) =>
        b.id === editingBudget.id
          ? {
              ...b,
              category: formData.category.trim(),
              allocated: allocatedNumber,
              spent: Number(formData.spent || 0),
              icon: selectedIcon,
              color: selectedColor,
            }
          : b
      )
    );

    resetForm();
    setShowEditBudget(false);
    setEditingBudget(null);
  };

  const handleDeleteBudget = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce budget ?")) {
      setBudgets((prev) => prev.filter((b) => b.id !== id));
    }
  };

  // Ajout d'une dépense rapide à un budget existant
  const handleQuickAddExpense = (budgetId: number, amount: number) => {
    setBudgets((prev) =>
      prev.map((b) =>
        b.id === budgetId
          ? { ...b, spent: Number(b.spent) + amount }
          : b
      )
    );
  };

  // Conseils dynamiques
  const generateAdvice = useMemo((): Advice[] => {
    const advice: Advice[] = [];

    overBudget.forEach((budget) => {
      const excess = Number(budget.spent) - Number(budget.allocated);
      advice.push({
        type: "warning",
        message: `Vous avez dépassé votre budget "${budget.category}" de ${excess.toLocaleString()} €. Essayez de réduire vos dépenses.`,
      });
    });

    budgets.forEach((budget) => {
      const allocated = Number(budget.allocated || 0);
      const spent = Number(budget.spent || 0);
      if (allocated <= 0) return;

      const saved = allocated - spent;
      if (saved > allocated * 0.3) {
        advice.push({
          type: "success",
          message: `Excellent ! Vous avez économisé ${saved.toLocaleString()} € sur votre budget "${budget.category}".`,
        });
      }

      const percentage = (spent / allocated) * 100;
      if (percentage >= 90 && percentage < 100) {
        advice.push({
          type: "info",
          message: `Votre budget "${budget.category}" est proche de la limite (${percentage.toFixed(0)}%). Surveillez vos dépenses.`,
        });
      }
    });

    return advice.slice(0, 3);
  }, [budgets, overBudget]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-amber-400">₣</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Budget</h1>
                <p className="text-sm text-slate-500">Planifiez et suivez vos dépenses</p>
              </div>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowAddBudget(true);
              }}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              + Ajouter Budget
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {/* Vue d'ensemble */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="col-span-1 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 shadow-xl text-white transform transition-all duration-300 hover:scale-105">
            <p className="text-sm font-medium mb-2 text-cyan-100">Budget Total</p>
            <p className="text-4xl font-bold mb-1">{totalAllocated.toLocaleString()} €</p>
            <p className="text-sm text-cyan-100">{periodLabel}</p>
          </div>

          <div className="col-span-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-xl text-white transform transition-all duration-300 hover:scale-105">
            <p className="text-sm font-medium mb-2 text-emerald-100">Dépensé</p>
            <p className="text-4xl font-bold mb-1">{totalSpent.toLocaleString()} €</p>
            <p className="text-sm text-emerald-100">
              {totalAllocated > 0 ? ((totalSpent / totalAllocated) * 100).toFixed(1) : 0}% du budget
            </p>
          </div>

          <div className="col-span-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white transform transition-all duration-300 hover:scale-105">
            <p className="text-sm font-medium mb-2 text-purple-100">Restant</p>
            <p className="text-4xl font-bold mb-1">{remaining.toLocaleString()} €</p>
            <p className="text-sm text-purple-100">
              {totalAllocated > 0 ? ((remaining / totalAllocated) * 100).toFixed(1) : 0}% disponible
            </p>
          </div>

          <div className="col-span-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl text-white transform transition-all duration-300 hover:scale-105">
            <p className="text-sm font-medium mb-2 text-orange-100">Dépassements</p>
            <p className="text-4xl font-bold mb-1">{overBudget.length}</p>
            <p className="text-sm text-orange-100">
              {overBudget.length === 0 ? "Aucune alerte" : overBudget.length === 1 ? "Catégorie en alerte" : "Catégories en alerte"}
            </p>
          </div>
        </div>

        {/* Sélecteur de période */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-800">Période</h2>
            <div className="flex gap-2">
              {(["weekly", "monthly", "yearly"] as PeriodKey[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedPeriod === p ? "bg-cyan-500 text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {p === "weekly" ? "Semaine" : p === "monthly" ? "Mois" : "Année"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Graphique global */}
        {totalAllocated > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Progression Globale</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-slate-700">Budget utilisé</span>
                <span className="font-bold text-slate-900">
                  {totalSpent.toLocaleString()} € / {totalAllocated.toLocaleString()} €
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-8 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-3"
                  style={{ width: `${Math.min((totalSpent / totalAllocated) * 100, 100)}%` }}
                >
                  <span className="text-white text-xs font-bold">{((totalSpent / totalAllocated) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message si aucun budget */}
        {budgets.length === 0 && (
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Aucun budget défini</h3>
            <p className="text-slate-600 mb-6">Commencez par créer votre premier budget pour suivre vos dépenses</p>
            <button
              onClick={() => {
                resetForm();
                setShowAddBudget(true);
              }}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Créer mon premier budget
            </button>
          </div>
        )}

        {/* Budgets */}
        {budgets.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {budgets.map((budget) => {
              const percentage = getPercentage(budget.spent, budget.allocated);
              const status = getStatus(budget.spent, budget.allocated);
              const colors = colorSchemes[budget.color] || colorSchemes.purple;
              const isOverBudget = Number(budget.spent) > Number(budget.allocated);

              const diff = Number(budget.allocated) - Number(budget.spent);
              const diffLabel = diff >= 0 ? "Restant" : "Dépassement";

              return (
                <div
                  key={budget.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    isOverBudget ? "border-red-300" : "border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                        {budget.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{budget.category}</h3>
                        <span className={`text-sm font-semibold ${status.color}`}>{status.text}</span>
                      </div>
                    </div>

                    <div className="relative group">
                      <button className="text-slate-400 hover:text-slate-600 text-xl px-2">⋮</button>
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                        <button
                          onClick={() => openEditForm(budget)}
                          className="w-full text-left px-4 py-2 hover:bg-slate-100 rounded-t-lg text-sm font-medium text-slate-700"
                        >
                          ✏️ Modifier
                        </button>
                        <button
                          onClick={() => handleDeleteBudget(budget.id)}
                          className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-b-lg text-sm font-medium text-red-600"
                        >
                          🗑️ Supprimer
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                        <div className={`${colors.bar} h-full rounded-full transition-all duration-1000 relative`} style={{ width: `${percentage}%` }}>
                          {percentage > 20 && (
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs font-bold">
                              {percentage.toFixed(0)}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{Number(budget.spent).toLocaleString()} €</p>
                        <p className="text-sm text-slate-500">sur {Number(budget.allocated).toLocaleString()} € alloués</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl font-bold ${diff < 0 ? "text-red-600" : "text-emerald-600"}`}>
                          {diff < 0 ? "+" : ""}{Math.abs(diff).toLocaleString()} €
                        </p>
                        <p className="text-sm text-slate-500">{diffLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Conseils */}
        {budgets.length > 0 && generateAdvice.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💡</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Conseils Budget</h3>
                <ul className="space-y-2 text-slate-700">
                  {generateAdvice.map((a, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{a.message}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal Ajouter */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => {
                setShowAddBudget(false);
                resetForm();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Nouveau Budget</h2>

            <form onSubmit={handleAddBudget} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Catégorie <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Ex: Restaurants"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Montant alloué (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="allocated"
                  value={formData.allocated}
                  onChange={handleInputChange}
                  placeholder="500"
                  min="0"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Montant déjà dépensé (€)</label>
                <input
                  type="number"
                  name="spent"
                  value={formData.spent}
                  onChange={handleInputChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Icône</label>
                <div className="grid grid-cols-8 gap-2">
                  {availableIcons.map((icon, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedIcon(icon)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
                        selectedIcon === icon ? "bg-emerald-500 text-white" : "bg-slate-100 hover:bg-emerald-100"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Couleur</label>
                <div className="grid grid-cols-5 gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 rounded-lg transition-all ${
                        selectedColor === color ? "ring-4 ring-slate-400 scale-110" : "hover:scale-105"
                      } bg-gradient-to-br ${colorSchemes[color].gradient}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
              >
                Créer le Budget
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Modifier */}
      {showEditBudget && editingBudget && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => {
                setShowEditBudget(false);
                setEditingBudget(null);
                resetForm();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Modifier le Budget</h2>

            <form onSubmit={handleEditBudget} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Catégorie <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Ex: Restaurants"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Montant alloué (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="allocated"
                  value={formData.allocated}
                  onChange={handleInputChange}
                  placeholder="500"
                  min="0"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Montant déjà dépensé (€)</label>
                <input
                  type="number"
                  name="spent"
                  value={formData.spent}
                  onChange={handleInputChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Icône</label>
                <div className="grid grid-cols-8 gap-2">
                  {availableIcons.map((icon, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedIcon(icon)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
                        selectedIcon === icon ? "bg-emerald-500 text-white" : "bg-slate-100 hover:bg-emerald-100"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Couleur</label>
                <div className="grid grid-cols-5 gap-2">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 rounded-lg transition-all ${
                        selectedColor === color ? "ring-4 ring-slate-400 scale-110" : "hover:scale-105"
                      } bg-gradient-to-br ${colorSchemes[color].gradient}`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
              >
                Enregistrer les modifications
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}




// 'use client';

// import { useState, useEffect } from 'react';

// export default function Budget() {
//   const [selectedPeriod, setSelectedPeriod] = useState('monthly');
//   const [showAddBudget, setShowAddBudget] = useState(false);
//   const [showEditBudget, setShowEditBudget] = useState(false);
//   const [editingBudget, setEditingBudget] = useState(null);
//   const [selectedIcon, setSelectedIcon] = useState('🏠');
//   const [selectedColor, setSelectedColor] = useState('purple');
  
//   // Formulaire
//   const [formData, setFormData] = useState({
//     category: '',
//     allocated: '',
//     spent: 0,
//     icon: '🏠',
//     color: 'purple'
//   });

//   // State pour les budgets
//   const [budgets, setBudgets] = useState([
//     {
//       id: 1,
//       category: 'Logement',
//       allocated: 1500,
//       spent: 1200,
//       color: 'purple',
//       icon: '🏠'
//     },
//     {
//       id: 2,
//       category: 'Alimentation',
//       allocated: 600,
//       spent: 485,
//       color: 'green',
//       icon: '🍔'
//     },
//     {
//       id: 3,
//       category: 'Transport',
//       allocated: 300,
//       spent: 275,
//       color: 'blue',
//       icon: '🚗'
//     },
//     {
//       id: 4,
//       category: 'Loisirs',
//       allocated: 400,
//       spent: 520,
//       color: 'pink',
//       icon: '🎮'
//     },
//     {
//       id: 5,
//       category: 'Santé',
//       allocated: 200,
//       spent: 145,
//       color: 'red',
//       icon: '🏥'
//     },
//     {
//       id: 6,
//       category: 'Vêtements',
//       allocated: 250,
//       spent: 180,
//       color: 'indigo',
//       icon: '👕'
//     },
//     {
//       id: 7,
//       category: 'Télécom',
//       allocated: 80,
//       spent: 80,
//       color: 'cyan',
//       icon: '📱'
//     },
//     {
//       id: 8,
//       category: 'Énergie',
//       allocated: 150,
//       spent: 165,
//       color: 'yellow',
//       icon: '⚡'
//     },
//     {
//       id: 9,
//       category: 'Éducation',
//       allocated: 300,
//       spent: 120,
//       color: 'orange',
//       icon: '📚'
//     },
//     {
//       id: 10,
//       category: 'Cadeaux',
//       allocated: 200,
//       spent: 85,
//       color: 'rose',
//       icon: '🎁'
//     },
//   ]);

//   const colorSchemes = {
//     purple: { 
//       bg: 'bg-purple-100', 
//       text: 'text-purple-700', 
//       bar: 'bg-purple-500',
//       gradient: 'from-purple-500 to-purple-600'
//     },
//     green: { 
//       bg: 'bg-green-100', 
//       text: 'text-green-700', 
//       bar: 'bg-green-500',
//       gradient: 'from-green-500 to-green-600'
//     },
//     blue: { 
//       bg: 'bg-blue-100', 
//       text: 'text-blue-700', 
//       bar: 'bg-blue-500',
//       gradient: 'from-blue-500 to-blue-600'
//     },
//     pink: { 
//       bg: 'bg-pink-100', 
//       text: 'text-pink-700', 
//       bar: 'bg-pink-500',
//       gradient: 'from-pink-500 to-pink-600'
//     },
//     red: { 
//       bg: 'bg-red-100', 
//       text: 'text-red-700', 
//       bar: 'bg-red-500',
//       gradient: 'from-red-500 to-red-600'
//     },
//     indigo: { 
//       bg: 'bg-indigo-100', 
//       text: 'text-indigo-700', 
//       bar: 'bg-indigo-500',
//       gradient: 'from-indigo-500 to-indigo-600'
//     },
//     cyan: { 
//       bg: 'bg-cyan-100', 
//       text: 'text-cyan-700', 
//       bar: 'bg-cyan-500',
//       gradient: 'from-cyan-500 to-cyan-600'
//     },
//     yellow: { 
//       bg: 'bg-yellow-100', 
//       text: 'text-yellow-700', 
//       bar: 'bg-yellow-500',
//       gradient: 'from-yellow-500 to-yellow-600'
//     },
//     orange: { 
//       bg: 'bg-orange-100', 
//       text: 'text-orange-700', 
//       bar: 'bg-orange-500',
//       gradient: 'from-orange-500 to-orange-600'
//     },
//     rose: { 
//       bg: 'bg-rose-100', 
//       text: 'text-rose-700', 
//       bar: 'bg-rose-500',
//       gradient: 'from-rose-500 to-rose-600'
//     },
//   };

//   const availableIcons = ['🏠', '🍔', '🚗', '🎮', '🏥', '👕', '📱', '⚡', '📚', '🎁', '✈️', '🎵', '💼', '🏋️', '🎨', '🔧'];
//   const availableColors = Object.keys(colorSchemes);

//   // Calculs dynamiques
//   const totalAllocated = budgets.reduce((sum, b) => sum + b.allocated, 0);
//   const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
//   const remaining = totalAllocated - totalSpent;
//   const overBudget = budgets.filter(b => b.spent > b.allocated);

//   const getPercentage = (spent, allocated) => {
//     if (allocated === 0) return 0;
//     return Math.min((spent / allocated) * 100, 100);
//   };

//   const getStatus = (spent, allocated) => {
//     if (allocated === 0) return { text: 'Non défini', color: 'text-gray-600' };
//     const percentage = (spent / allocated) * 100;
//     if (percentage >= 100) return { text: 'Dépassé', color: 'text-red-600' };
//     if (percentage >= 80) return { text: 'Attention', color: 'text-orange-600' };
//     return { text: 'OK', color: 'text-green-600' };
//   };

//   // Gestion du formulaire
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'allocated' || name === 'spent' ? parseFloat(value) || 0 : value
//     }));
//   };

//   // Ajouter un budget
//   const handleAddBudget = (e) => {
//     e.preventDefault();
    
//     if (!formData.category || !formData.allocated) {
//       alert('Veuillez remplir tous les champs obligatoires');
//       return;
//     }

//     const newBudget = {
//       id: Date.now(),
//       category: formData.category,
//       allocated: parseFloat(formData.allocated),
//       spent: parseFloat(formData.spent) || 0,
//       icon: selectedIcon,
//       color: selectedColor
//     };

//     setBudgets(prev => [...prev, newBudget]);
//     resetForm();
//     setShowAddBudget(false);
//   };

//   // Modifier un budget
//   const handleEditBudget = (e) => {
//     e.preventDefault();
    
//     if (!formData.category || !formData.allocated) {
//       alert('Veuillez remplir tous les champs obligatoires');
//       return;
//     }

//     setBudgets(prev => prev.map(budget => 
//       budget.id === editingBudget.id 
//         ? {
//             ...budget,
//             category: formData.category,
//             allocated: parseFloat(formData.allocated),
//             spent: parseFloat(formData.spent) || 0,
//             icon: selectedIcon,
//             color: selectedColor
//           }
//         : budget
//     ));

//     resetForm();
//     setShowEditBudget(false);
//     setEditingBudget(null);
//   };

//   // Supprimer un budget
//   const handleDeleteBudget = (id) => {
//     if (confirm('Voulez-vous vraiment supprimer ce budget ?')) {
//       setBudgets(prev => prev.filter(budget => budget.id !== id));
//     }
//   };

//   // Ouvrir le formulaire d'édition
//   const openEditForm = (budget) => {
//     setEditingBudget(budget);
//     setFormData({
//       category: budget.category,
//       allocated: budget.allocated,
//       spent: budget.spent,
//       icon: budget.icon,
//       color: budget.color
//     });
//     setSelectedIcon(budget.icon);
//     setSelectedColor(budget.color);
//     setShowEditBudget(true);
//   };

//   // Réinitialiser le formulaire
//   const resetForm = () => {
//     setFormData({
//       category: '',
//       allocated: '',
//       spent: 0,
//       icon: '🏠',
//       color: 'purple'
//     });
//     setSelectedIcon('🏠');
//     setSelectedColor('purple');
//   };

//   // Générer des conseils dynamiques
//   const generateAdvice = () => {
//     const advice = [];
    
//     overBudget.forEach(budget => {
//       const excess = budget.spent - budget.allocated;
//       advice.push({
//         type: 'warning',
//         message: `Vous avez dépassé votre budget "${budget.category}" de ${excess.toLocaleString()} €. Essayez de réduire vos dépenses.`
//       });
//     });

//     budgets.forEach(budget => {
//       const saved = budget.allocated - budget.spent;
//       if (saved > budget.allocated * 0.3) {
//         advice.push({
//           type: 'success',
//           message: `Excellent ! Vous avez économisé ${saved.toLocaleString()} € sur votre budget "${budget.category}".`
//         });
//       }

//       const percentage = (budget.spent / budget.allocated) * 100;
//       if (percentage >= 90 && percentage < 100) {
//         advice.push({
//           type: 'info',
//           message: `Votre budget "${budget.category}" est proche de la limite (${percentage.toFixed(0)}%). Surveillez vos dépenses.`
//         });
//       }
//     });

//     return advice.slice(0, 3); // Limiter à 3 conseils
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-slate-200">
//         <div className="max-w-[1800px] mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-2xl font-bold text-amber-400">₣</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-800">Budget</h1>
//                 <p className="text-sm text-slate-500">Planifiez et suivez vos dépenses</p>
//               </div>
//             </div>
//             <button 
//               onClick={() => {
//                 resetForm();
//                 setShowAddBudget(true);
//               }}
//               className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               + Ajouter Budget
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-[1800px] mx-auto px-6 py-8">
//         {/* Vue d'ensemble */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="col-span-1 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 shadow-xl text-white">
//             <p className="text-sm font-medium mb-2 text-cyan-100">Budget Total</p>
//             <p className="text-4xl font-bold mb-1">{totalAllocated.toLocaleString()} €</p>
//             <p className="text-sm text-cyan-100">Pour ce mois</p>
//           </div>

//           <div className="col-span-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-xl text-white">
//             <p className="text-sm font-medium mb-2 text-emerald-100">Dépensé</p>
//             <p className="text-4xl font-bold mb-1">{totalSpent.toLocaleString()} €</p>
//             <p className="text-sm text-emerald-100">
//               {totalAllocated > 0 ? ((totalSpent/totalAllocated)*100).toFixed(1) : 0}% du budget
//             </p>
//           </div>

//           <div className="col-span-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white">
//             <p className="text-sm font-medium mb-2 text-purple-100">Restant</p>
//             <p className="text-4xl font-bold mb-1">{remaining.toLocaleString()} €</p>
//             <p className="text-sm text-purple-100">
//               {totalAllocated > 0 ? ((remaining/totalAllocated)*100).toFixed(1) : 0}% disponible
//             </p>
//           </div>

//           <div className="col-span-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl text-white">
//             <p className="text-sm font-medium mb-2 text-orange-100">Dépassements</p>
//             <p className="text-4xl font-bold mb-1">{overBudget.length}</p>
//             <p className="text-sm text-orange-100">
//               {overBudget.length === 0 ? 'Aucune alerte' : overBudget.length === 1 ? 'Catégorie en alerte' : 'Catégories en alerte'}
//             </p>
//           </div>
//         </div>

//         {/* Sélecteur de période */}
//         <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//             <h2 className="text-xl font-bold text-slate-800">Période</h2>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setSelectedPeriod('weekly')}
//                 className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                   selectedPeriod === 'weekly'
//                     ? 'bg-cyan-500 text-white shadow-lg'
//                     : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//                 }`}
//               >
//                 Semaine
//               </button>
//               <button
//                 onClick={() => setSelectedPeriod('monthly')}
//                 className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                   selectedPeriod === 'monthly'
//                     ? 'bg-cyan-500 text-white shadow-lg'
//                     : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//                 }`}
//               >
//                 Mois
//               </button>
//               <button
//                 onClick={() => setSelectedPeriod('yearly')}
//                 className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                   selectedPeriod === 'yearly'
//                     ? 'bg-cyan-500 text-white shadow-lg'
//                     : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//                 }`}
//               >
//                 Année
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Graphique global */}
//         {totalAllocated > 0 && (
//           <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
//             <h2 className="text-xl font-bold text-slate-800 mb-6">Progression Globale</h2>
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between text-sm">
//                 <span className="font-semibold text-slate-700">Budget utilisé</span>
//                 <span className="font-bold text-slate-900">{totalSpent.toLocaleString()} € / {totalAllocated.toLocaleString()} €</span>
//               </div>
//               <div className="w-full bg-slate-200 rounded-full h-8 overflow-hidden">
//                 <div 
//                   className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000 flex items-center justify-end pr-3"
//                   style={{ width: `${Math.min((totalSpent/totalAllocated)*100, 100)}%` }}
//                 >
//                   <span className="text-white text-xs font-bold">
//                     {((totalSpent/totalAllocated)*100).toFixed(1)}%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Message si aucun budget */}
//         {budgets.length === 0 && (
//           <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
//             <div className="text-6xl mb-4">📊</div>
//             <h3 className="text-2xl font-bold text-slate-800 mb-2">Aucun budget défini</h3>
//             <p className="text-slate-600 mb-6">Commencez par créer votre premier budget pour suivre vos dépenses</p>
//             <button 
//               onClick={() => {
//                 resetForm();
//                 setShowAddBudget(true);
//               }}
//               className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               Créer mon premier budget
//             </button>
//           </div>
//         )}

//         {/* Budgets par catégorie */}
//         {budgets.length > 0 && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {budgets.map((budget) => {
//               const percentage = getPercentage(budget.spent, budget.allocated);
//               const status = getStatus(budget.spent, budget.allocated);
//               const colors = colorSchemes[budget.color];
//               const isOverBudget = budget.spent > budget.allocated;

//               return (
//                 <div 
//                   key={budget.id} 
//                   className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
//                     isOverBudget ? 'border-red-300' : 'border-transparent'
//                   }`}
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
//                         {budget.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-slate-800">{budget.category}</h3>
//                         <span className={`text-sm font-semibold ${status.color}`}>{status.text}</span>
//                       </div>
//                     </div>
//                     <div className="relative group">
//                       <button className="text-slate-400 hover:text-slate-600 text-xl">⋮</button>
//                       <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
//                         <button 
//                           onClick={() => openEditForm(budget)}
//                           className="w-full text-left px-4 py-2 hover:bg-slate-100 rounded-t-lg text-sm font-medium text-slate-700"
//                         >
//                           ✏️ Modifier
//                         </button>
//                         <button 
//                           onClick={() => handleDeleteBudget(budget.id)}
//                           className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-b-lg text-sm font-medium text-red-600"
//                         >
//                           🗑️ Supprimer
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     {/* Barre de progression */}
//                     <div className="relative">
//                       <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
//                         <div 
//                           className={`${colors.bar} h-full rounded-full transition-all duration-1000 relative`}
//                           style={{ width: `${percentage}%` }}
//                         >
//                           {percentage > 20 && (
//                             <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs font-bold">
//                               {percentage.toFixed(0)}%
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Montants */}
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="text-2xl font-bold text-slate-900">{budget.spent.toLocaleString()} €</p>
//                         <p className="text-sm text-slate-500">sur {budget.allocated.toLocaleString()} € alloués</p>
//                       </div>
//                       <div className="text-right">
//                         <p className={`text-xl font-bold ${isOverBudget ? 'text-red-600' : 'text-emerald-600'}`}>
//                           {isOverBudget ? '+' : ''}{(budget.spent - budget.allocated).toLocaleString()} €
//                         </p>
//                         <p className="text-sm text-slate-500">
//                           {isOverBudget ? 'Dépassement' : 'Restant'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Conseils dynamiques */}
//         {budgets.length > 0 && generateAdvice().length > 0 && (
//           <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
//                 💡
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold text-slate-800 mb-2">Conseils Budget</h3>
//                 <ul className="space-y-2 text-slate-700">
//                   {generateAdvice().map((advice, index) => (
//                     <li key={index} className="flex items-start gap-2">
//                       <span className="text-blue-500 mt-1">•</span>
//                       <span>{advice.message}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Modal Ajouter Budget */}
//       {showAddBudget && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
//             <button
//               onClick={() => {
//                 setShowAddBudget(false);
//                 resetForm();
//               }}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
//             >
//               ×
//             </button>

//             <h2 className="text-2xl font-bold text-slate-900 mb-6">Nouveau Budget</h2>

//             <form onSubmit={handleAddBudget} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Catégorie <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   placeholder="Ex: Restaurants"
//                   required
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Montant alloué (€) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="allocated"
//                   value={formData.allocated}
//                   onChange={handleInputChange}
//                   placeholder="500"
//                   min="0"
//                   step="0.01"
//                   required
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Montant déjà dépensé (€)
//                 </label>
//                 <input
//                   type="number"
//                   name="spent"
//                   value={formData.spent}
//                   onChange={handleInputChange}
//                   placeholder="0"
//                   min="0"
//                   step="0.01"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Icône</label>
//                 <div className="grid grid-cols-8 gap-2">
//                   {availableIcons.map((icon, i) => (
//                     <button
//                       key={i}
//                       type="button"
//                       onClick={() => setSelectedIcon(icon)}
//                       className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
//                         selectedIcon === icon 
//                           ? 'bg-emerald-500 text-white' 
//                           : 'bg-slate-100 hover:bg-emerald-100'
//                       }`}
//                     >
//                       {icon}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Couleur</label>
//                 <div className="grid grid-cols-5 gap-2">
//                   {availableColors.map((color) => (
//                     <button
//                       key={color}
//                       type="button"
//                       onClick={() => setSelectedColor(color)}
//                       className={`h-10 rounded-lg transition-all ${
//                         selectedColor === color 
//                           ? 'ring-4 ring-slate-400 scale-110' 
//                           : 'hover:scale-105'
//                       } bg-gradient-to-br ${colorSchemes[color].gradient}`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <button 
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
//               >
//                 Créer le Budget
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Modal Modifier Budget */}
//       {showEditBudget && editingBudget && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
//             <button
//               onClick={() => {
//                 setShowEditBudget(false);
//                 setEditingBudget(null);
//                 resetForm();
//               }}
//               className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
//             >
//               ×
//             </button>

//             <h2 className="text-2xl font-bold text-slate-900 mb-6">Modifier le Budget</h2>

//             <form onSubmit={handleEditBudget} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Catégorie <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   placeholder="Ex: Restaurants"
//                   required
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Montant alloué (€) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="allocated"
//                   value={formData.allocated}
//                   onChange={handleInputChange}
//                   placeholder="500"
//                   min="0"
//                   step="0.01"
//                   required
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Montant déjà dépensé (€)
//                 </label>
//                 <input
//                   type="number"
//                   name="spent"
//                   value={formData.spent}
//                   onChange={handleInputChange}
//                   placeholder="0"
//                   min="0"
//                   step="0.01"
//                   className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Icône</label>
//                 <div className="grid grid-cols-8 gap-2">
//                   {availableIcons.map((icon, i) => (
//                     <button
//                       key={i}
//                       type="button"
//                       onClick={() => setSelectedIcon(icon)}
//                       className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
//                         selectedIcon === icon 
//                           ? 'bg-emerald-500 text-white' 
//                           : 'bg-slate-100 hover:bg-emerald-100'
//                       }`}
//                     >
//                       {icon}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">Couleur</label>
//                 <div className="grid grid-cols-5 gap-2">
//                   {availableColors.map((color) => (
//                     <button
//                       key={color}
//                       type="button"
//                       onClick={() => setSelectedColor(color)}
//                       className={`h-10 rounded-lg transition-all ${
//                         selectedColor === color 
//                           ? 'ring-4 ring-slate-400 scale-110' 
//                           : 'hover:scale-105'
//                       } bg-gradient-to-br ${colorSchemes[color].gradient}`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <button 
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 mt-6"
//               >
//                 Enregistrer les modifications
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }