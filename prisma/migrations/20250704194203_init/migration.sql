-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "districtId" TEXT,
    CONSTRAINT "user_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "district" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "district" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    CONSTRAINT "district_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "districtId" TEXT,
    CONSTRAINT "report_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "district" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "district_name_key" ON "district"("name");

-- CreateIndex
CREATE UNIQUE INDEX "group_name_key" ON "group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "report_name_key" ON "report"("name");
