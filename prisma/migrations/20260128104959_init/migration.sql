-- CreateTable
CREATE TABLE "avoir" (
    "commande_id" INTEGER NOT NULL,
    "produit_id" INTEGER NOT NULL,
    "apparaitre" INTEGER NOT NULL,

    CONSTRAINT "avoir_pkey" PRIMARY KEY ("commande_id","produit_id")
);

-- CreateTable
CREATE TABLE "commande" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "date_commande" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "montant_total" DECIMAL(10,2),
    "statut" VARCHAR(50),

    CONSTRAINT "commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facture" (
    "id" SERIAL NOT NULL,
    "numero_facture" VARCHAR(100) NOT NULL,
    "commande_id" INTEGER NOT NULL,
    "date_facture" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "montant_total" DECIMAL(10,2),
    "statut" VARCHAR(50),

    CONSTRAINT "facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playing_with_neon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" REAL,

    CONSTRAINT "playing_with_neon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produit" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "prix_unitaire" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER DEFAULT 0,
    "image" VARCHAR(255),
    "type_produit_id" INTEGER,

    CONSTRAINT "produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_produit" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "type_produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "numero" VARCHAR(20),
    "adresse" VARCHAR(255),
    "mot_de_passe" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50),
    "statut" VARCHAR(50),
    "date_de_creation" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facture_numero_facture_key" ON "facture"("numero_facture");

-- CreateIndex
CREATE UNIQUE INDEX "facture_commande_id_key" ON "facture"("commande_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "avoir" ADD CONSTRAINT "fk_avoir_commande" FOREIGN KEY ("commande_id") REFERENCES "commande"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "avoir" ADD CONSTRAINT "fk_avoir_produit" FOREIGN KEY ("produit_id") REFERENCES "produit"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "commande" ADD CONSTRAINT "fk_commande_user" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "facture" ADD CONSTRAINT "fk_facture_commande" FOREIGN KEY ("commande_id") REFERENCES "commande"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produit" ADD CONSTRAINT "fk_type_produit" FOREIGN KEY ("type_produit_id") REFERENCES "type_produit"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
