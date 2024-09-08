'use client';

import React from 'react';

const UploadLabResultsPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-teal-600">Загрузка лабораторных анализов</h1>

            <div className="bg-teal-100 border border-teal-300 rounded-md p-4">
                <p className="text-teal-800">
                    Загрузка лабораторных анализов осуществляется из CSV-файлов. При загрузке нескольких файлов или файла размером более 5 мб используйте ZIP-файл.
                </p>
            </div>

            <div className="flex flex-col space-y-4 items-center">
                <input
                    type="file"
                    className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
                    accept=".csv, .zip"
                />
                <button
                    className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
                    disabled
                >
                    Загрузить
                </button>
            </div>
        </div>
    );
};

export default UploadLabResultsPage;
