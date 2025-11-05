'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRobot, FaUser, FaLock, FaIdCard } from 'react-icons/fa';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    realName: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <FaRobot className="text-black" />
            </div>
            <span className="text-red-500">NetRunner<span className="text-white">AI</span></span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Crear Cuenta</h2>
            <p className="text-gray-400 mt-2">Únete a NetRunner</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                maxLength={20}
                required
              />
            </div>

            <div className="relative">
              <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="realName"
                placeholder="Nombre completo"
                value={formData.realName}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                maxLength={50}
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-black font-semibold py-3 rounded-lg transition"
            >
              Crear Cuenta
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              ¿Ya tienes cuenta?
              <Link href="/login" className="text-red-500 hover:text-red-400 ml-2 font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="text-gray-500 hover:text-gray-400 text-sm">
              ← Volver al chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
