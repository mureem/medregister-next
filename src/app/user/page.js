'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
    const [isPasswordChangeVisible, setIsPasswordChangeVisible] = useState(false);

    const togglePasswordChange = () => {
        setIsPasswordChangeVisible(!isPasswordChangeVisible);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-teal-600 mb-6">Пользовательские данные</h1>

            <form className="space-y-6">
                {/* Логин */}
                <div>
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">Логин</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        placeholder="Введите логин"
                    />
                </div>

                {/* Язык системы */}
                <div>
                    <label htmlFor="language" className="block text-lg font-medium text-gray-700">Язык системы</label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    >
                        <option value="ru">Русский</option>
                    </select>
                </div>

                {/* Права доступа */}
                <div>
                    <label htmlFor="permissions" className="block text-lg font-medium text-gray-700">Права доступа</label>
                    <input
                        type="text"
                        id="permissions"
                        name="permissions"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        placeholder="Добавить пользователя"
                    />
                </div>

                {/* Изменить пароль */}
                <div className="flex items-center space-x-4">
                    <label htmlFor="change-password" className="text-lg font-medium text-gray-700">Изменить пароль?</label>
                    <input
                        type="checkbox"
                        id="change-password"
                        name="change-password"
                        className="h-4 w-4 border-gray-300 rounded"
                        onChange={togglePasswordChange}
                    />
                </div>

                {isPasswordChangeVisible && (
                    <div className="space-y-4">
                        {/* Текущий пароль */}
                        <div>
                            <label htmlFor="current-password" className="block text-lg font-medium text-gray-700">Текущий пароль</label>
                            <input
                                type="password"
                                id="current-password"
                                name="current-password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                placeholder="Введите текущий пароль"
                            />
                        </div>

                        {/* Новый пароль */}
                        <div>
                            <label htmlFor="new-password" className="block text-lg font-medium text-gray-700">Новый пароль</label>
                            <input
                                type="password"
                                id="new-password"
                                name="new-password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                placeholder="Введите новый пароль"
                            />
                        </div>

                        {/* Повторите новый пароль */}
                        <div>
                            <label htmlFor="confirm-new-password" className="block text-lg font-medium text-gray-700">Повторите новый пароль</label>
                            <input
                                type="password"
                                id="confirm-new-password"
                                name="confirm-new-password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                placeholder="Повторите новый пароль"
                            />
                        </div>
                    </div>
                )}

                {/* Кнопка сохранить */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
}
