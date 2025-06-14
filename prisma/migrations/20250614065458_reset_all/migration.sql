-- CreateTable
CREATE TABLE "TrackedApp" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "appUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "TrackedApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackedAppLog" (
    "id" TEXT NOT NULL,
    "trackedAppId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrackedAppLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackedApp_appUrl_key" ON "TrackedApp"("appUrl");

-- AddForeignKey
ALTER TABLE "TrackedAppLog" ADD CONSTRAINT "TrackedAppLog_trackedAppId_fkey" FOREIGN KEY ("trackedAppId") REFERENCES "TrackedApp"("id") ON DELETE SET NULL ON UPDATE CASCADE;
