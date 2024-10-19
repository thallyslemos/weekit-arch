/*
  Warnings:

  - The primary key for the `Tarefa` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarefa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "finalizada" BOOLEAN NOT NULL,
    "projetoId" TEXT NOT NULL,
    CONSTRAINT "Tarefa_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tarefa" ("descricao", "finalizada", "id", "projetoId", "titulo") SELECT "descricao", "finalizada", "id", "projetoId", "titulo" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
