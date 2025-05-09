import React from 'react';
import { Typography, Tooltip, Button, Badge } from 'antd';
import { 
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title } = Typography;

const Header = ({ onShowSettings, onShowHelp, streak }) => {
  return (
    <>
      <motion.div 
        className="header-container glass-card-small"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <div className="logo-section">
            <motion.div 
              className="logo-animation"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 0.95, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <img 
                src="/logo.png" 
                alt="Zepp Life" 
                className="logo-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
            <Title level={3} className="site-title">Zepp Life 步数修改助手</Title>
          </div>
        </div>
      </motion.div>
      
      {/* 浮动操作按钮组 - 完全独立于Header */}
      <div className="floating-action-buttons">
        <Tooltip title="设置" placement="left">
          <Button 
            type="text" 
            onClick={onShowSettings} 
            className="floating-button"
            icon={<SettingOutlined />}
          />
        </Tooltip>
        
        <Tooltip title="帮助" placement="left">
          <Button 
            type="text" 
            onClick={onShowHelp} 
            className="floating-button"
            icon={<QuestionCircleOutlined />}
          />
        </Tooltip>
        
        {streak > 0 && (
          <Tooltip title={`连续记录 ${streak} 天`} placement="left">
            <Badge count={streak} color="#f50" className="streak-badge">
              <Button 
                type="text" 
                className="floating-button"
                icon={<UserOutlined />}
              />
            </Badge>
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default Header; 