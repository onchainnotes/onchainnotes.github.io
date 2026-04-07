import { Menu, X, Download, Shield, Smartphone, Zap, Apple } from 'lucide-react';
import { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">O</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ChainNotes</span>
            </div>

            {/* 桌面导航 */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition font-medium">功能特性</a>
              <a href="#screenshots" className="text-gray-600 hover:text-green-600 transition font-medium">应用截图</a>
              <a href="#download" className="text-gray-600 hover:text-green-600 transition font-medium">下载应用</a>
              <Link to="/privacy" className="text-gray-600 hover:text-green-600 transition font-medium">隐私政策</Link>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-green-600 py-2 font-medium">功能特性</a>
              <a href="#screenshots" className="block text-gray-600 hover:text-green-600 py-2 font-medium">应用截图</a>
              <a href="#download" className="block text-gray-600 hover:text-green-600 py-2 font-medium">下载应用</a>
              <Link
                to="/privacy"
                className="block text-gray-600 hover:text-green-600 py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                隐私政策
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                📱 全新移动应用
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                智能笔记
                <span className="block text-green-600 mt-2">链上存储</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ChainNotes 是一款创新的笔记应用，将您的重要笔记安全存储在区块链上，永久保存，随时访问。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-2xl text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl">
                  <Download className="mr-2" size={20} />
                  立即下载
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-2xl text-lg font-semibold hover:border-green-300 transition">
                  了解更多
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-72 h-[600px] bg-gradient-to-br from-green-500 to-emerald-600 rounded-[3rem] shadow-2xl p-3">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-green-600 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">O</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">ChainNotes</h3>
                      <p className="text-gray-600">您的智能笔记助手</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性区域 */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们</h2>
            <p className="text-xl text-gray-600">强大的功能，简单的使用</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 功能卡片 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-5">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">区块链存储</h3>
              <p className="text-gray-600 leading-relaxed">
                利用区块链技术，您的笔记将被永久保存，不会丢失，真正的数据主权。
              </p>
            </div>

            {/* 功能卡片 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">快速同步</h3>
              <p className="text-gray-600 leading-relaxed">
                多设备实时同步，随时随地访问您的笔记，工作学习无缝衔接。
              </p>
            </div>

            {/* 功能卡片 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-5">
                <Smartphone className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">简洁易用</h3>
              <p className="text-gray-600 leading-relaxed">
                精心设计的界面，直观的操作流程，让记录变得更加简单高效。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 应用截图区域 */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">应用预览</h2>
            <p className="text-xl text-gray-600">简洁美观的界面设计</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
              >
                <div className="aspect-[9/16] bg-gray-50">
                  <img
                    src={`/screenshots/note_${item}.png`}
                    alt={`ChainNotes 应用截图 ${item}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 下载区域 */}
      <section id="download" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            立即开始使用
          </h2>
          <p className="text-xl text-green-100 mb-10">
            免费下载，体验全新的笔记方式
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gray-300 text-gray-500 rounded-2xl text-lg font-semibold shadow-lg opacity-60 cursor-not-allowed">
              <Apple className="mr-3" size={24} />
              <div className="text-left">
                <div className="text-xs text-gray-500">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </div>

            <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              <svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D662"/>
                <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                <path d="M3.84 2.15C4.04 2.06 4.27 2.03 4.5 2.05C4.73 2.07 4.95 2.15 5.13 2.27L16.81 8.88L14.54 11.15L3.84 2.15Z" fill="#FF3E00"/>
                <path d="M16.81 8.88L20.36 10.92C20.75 11.14 21 11.55 21 12C21 12.45 20.75 12.86 20.36 13.08L16.81 15.12L14.54 12.85L16.81 8.88Z" fill="#00AAFF"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-600">GET IT ON</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">O</span>
                </div>
                <span className="text-xl font-bold">ChainNotes</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                将您的重要笔记安全存储在区块链上，永久保存，随时访问。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">产品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-green-400 transition">功能特性</a></li>
                <li><a href="#screenshots" className="hover:text-green-400 transition">应用截图</a></li>
                <li><a href="#download" className="hover:text-green-400 transition">下载应用</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">法律</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-green-400 transition">
                    隐私政策
                  </Link>
                </li>
                <li><a href="#" className="hover:text-green-400 transition">服务条款</a></li>
                <li><a href="#" className="hover:text-green-400 transition">联系我们</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ChainNotes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}