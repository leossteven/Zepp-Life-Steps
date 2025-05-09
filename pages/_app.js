import '../styles/globals.css';
import '../styles/glassmorphism.css';
import { ConfigProvider } from 'antd';
import { useState, useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import Loading from './loading';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // 添加全局SEO配置
  const seoConfig = {
    titleTemplate: '%s | 微信支付宝运动步数修改',
    defaultTitle: '微信支付宝运动步数修改 - 专业自动步数同步工具',
    description: '专业的微信运动、支付宝运动步数修改工具，通过Zepp Life接口安全同步，支持随机步数生成和自动定时更新，让您轻松跑步打卡。',
    canonical: 'https://zepp-life-steps.vercel.app/',
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: 'https://zepp-life-steps.vercel.app/',
      siteName: '微信支付宝运动步数修改助手',
      images: [
        {
          url: 'https://zepp-life-steps.vercel.app/logo.png',
          width: 1200,
          height: 630,
          alt: '微信支付宝运动步数修改工具',
        },
      ],
    },
    twitter: {
      handle: '@zepplifesteps',
      site: '@zepplifesteps',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'application-name',
        content: '微信支付宝运动步数修改助手'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'theme-color',
        content: '#6366f1'
      }
    ],
  };

  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6366f1',
            borderRadius: 8,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          },
        }}
      >
        <div>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Loading />
              </motion.div>
            ) : (
              <motion.div
                key="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Component {...pageProps} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ConfigProvider>
    </>
  );
}

export default MyApp; 