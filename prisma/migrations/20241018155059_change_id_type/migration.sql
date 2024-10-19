/*
  Warnings:

  - The primary key for the `Projeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projeto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "responsavelId" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    CONSTRAINT "Projeto_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projeto" ("dataFim", "dataInicio", "id", "nome", "responsavelId") SELECT "dataFim", "dataInicio", "id", "nome", "responsavelId" FROM "Projeto";
DROP TABLE "Projeto";
ALTER TABLE "new_Projeto" RENAME TO "Projeto";
CREATE TABLE "new_Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "finalizada" BOOLEAN NOT NULL,
    "projetoId" TEXT NOT NULL,
    CONSTRAINT "Tarefa_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tarefa" ("descricao", "finalizada", "id", "projetoId", "titulo") SELECT "descricao", "finalizada", "id", "projetoId", "titulo" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("id", "nome") SELECT "id", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
