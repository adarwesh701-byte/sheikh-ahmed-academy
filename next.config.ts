import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // لتحديد مجلد المشروع الحالي بدقة ومنع التحذير
  },
};

export default function config() {
  return nextConfig;
}