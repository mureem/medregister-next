// src/app/reports/page.js

'use client';

import React from 'react';

const ReportsPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-teal-600 ">Создание отчётов</h1>

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="text-lg">Список отчётов:</span>
                    <select className="border border-gray-300 rounded-md p-2">
                        <option value="">Выберите отчёт</option>
                        <option value="gastrectomy">Гастрэктомия</option>
                    </select>
                </div>

                <div className="flex space-x-4">
                    <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                        onClick={() => console.log('Сохранить как CSV')}
                    >
                        Сохранить как CSV
                    </button>
                    <button
                        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                        onClick={() => console.log('Создать')}
                    >
                        Создать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
