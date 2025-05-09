import React, { useState } from 'react';
import { 
  Form, 
  Input, 
  Button, 
  Tooltip, 
  Space, 
  Slider, 
  Switch, 
  Typography 
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  NumberOutlined, 
  InfoCircleOutlined, 
  SyncOutlined, 
  FireOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Text, Title } = Typography;

const StepForm = ({ 
  form, 
  onFinish, 
  loading, 
  randomRange, 
  setRandomRange, 
  useRandom, 
  setUseRandom, 
  generateRandomSteps 
}) => {
  return (
    <motion.div
      className="step-form-container glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="card-header">
        <Title level={2} className="glass-title">步数修改</Title>
        <Text className="glass-subtitle">立即更新您的 Zepp Life 步数信息</Text>
      </div>

      <Form
        form={form}
        name="stepForm"
        onFinish={onFinish}
        className="glass-form"
        size="large"
      >
        <div className="form-item-container">
          <Form.Item
            name="account"
            rules={[{ required: true, message: '请输入您的小米账号!' }]}
          >
            <Input 
              className="glass-input"
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="手机号/邮箱/用户名" 
              autoComplete="username"
              suffix={
                <Tooltip title="填写您的小米账号">
                  <InfoCircleOutlined style={{ color: 'rgba(255,255,255,0.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
        </div>

        <div className="form-item-container">
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password
              className="glass-input"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="密码"
              autoComplete="current-password"
              suffix={
                <Tooltip title="填写您的小米账号密码">
                  <InfoCircleOutlined style={{ color: 'rgba(255,255,255,0.45)' }} />
                </Tooltip>
              }
            />
          </Form.Item>
        </div>

        <div className="form-item-container">
          <Space className="step-controls">
            <Form.Item
              name="steps"
              className="step-input"
              rules={useRandom ? [] : [{ required: true, message: '请输入步数!' }]}
            >
              <Input
                className="glass-input"
                disabled={useRandom}
                prefix={<NumberOutlined className="site-form-item-icon" />}
                placeholder="步数"
                suffix={
                  <Tooltip title="填写您想要修改的步数">
                    <InfoCircleOutlined style={{ color: 'rgba(255,255,255,0.45)' }} />
                  </Tooltip>
                }
              />
            </Form.Item>

            <Tooltip title="使用随机步数">
              <Switch
                checked={useRandom}
                onChange={setUseRandom}
                className="random-switch"
              />
            </Tooltip>
          </Space>
        </div>

        {useRandom && (
          <motion.div 
            className="random-steps-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Text className="glass-text">随机步数范围：{randomRange[0]} - {randomRange[1]} 步</Text>
            <div className="slider-container">
              <Slider
                range
                min={100}
                max={100000}
                defaultValue={randomRange}
                onChange={setRandomRange}
                className="glass-slider"
              />
            </div>
            <Button 
              type="dashed" 
              icon={<SyncOutlined />} 
              onClick={generateRandomSteps}
              className="random-button"
            >
              生成随机步数
            </Button>
          </motion.div>
        )}

        <Form.Item className="form-submit">
          <Button
            type="primary"
            htmlType="submit"
            className="glass-button"
            loading={loading}
            icon={<FireOutlined />}
            disabled={loading}
          >
            {loading ? '更新中...' : '立即更新步数'}
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default StepForm; 