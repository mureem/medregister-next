'use client';

import React, { useState } from 'react';

const PatientPage = () => {
    const [isConsentReceived, setIsConsentReceived] = useState(false);
    const [isInProtocol, setIsInProtocol] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [isAlive, setIsAlive] = useState(true);

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Button Section */}
            <div className="flex gap-2 mb-6">
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Предыдущая страница
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Следующая страница
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Отменить и назад
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Сохранить и выйти
                </button>
                <button className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400">
                    Сохранить
                </button>
            </div>

            {/* Patient Information Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold">Пациенты: НОВАЯ ЗАПИСЬ</h2>

                <div className="space-y-4">
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">№ амбулаторной карты</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-sm p-1 text-sm"
                            placeholder="Введите номер"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Бланк согласия пациента на обработку персональных данных в системе:</span>
                            <a href="/path/to/consent-form" className="text-teal-500 underline text-sm">
                                Скачать бланк согласия пациента на обработку персональных данных
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="text-sm">Согласие пациента на хранение персональных данных в системе получено:</label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="consent"
                                    className="form-radio"
                                    checked={!isConsentReceived}
                                    onChange={() => setIsConsentReceived(false)}
                                />
                                <span className="ml-2">Нет</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="consent"
                                    className="form-radio"
                                    checked={isConsentReceived}
                                    onChange={() => setIsConsentReceived(true)}
                                />
                                <span className="ml-2">Да</span>
                            </label>
                        </div>

                        <div className="flex items-center space-x-4">
                            <label className="text-sm">Участие пациента в протоколе проспективного исследования:</label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="protocol"
                                    className="form-radio"
                                    checked={!isInProtocol}
                                    onChange={() => setIsInProtocol(false)}
                                />
                                <span className="ml-2">Нет</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="protocol"
                                    className="form-radio"
                                    checked={isInProtocol}
                                    onChange={() => setIsInProtocol(true)}
                                />
                                <span className="ml-2">Да</span>
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Пол</label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="form-radio"
                                        checked={isMale}
                                        onChange={() => setIsMale(true)}
                                    />
                                    <span className="ml-2">Мужской</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="form-radio"
                                        checked={!isMale}
                                        onChange={() => setIsMale(false)}
                                    />
                                    <span className="ml-2">Женский</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Дата рождения</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded-sm p-1 text-sm"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Текущий возраст</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-sm p-1 text-sm"
                                placeholder="Введите возраст"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Статус</label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        className="form-radio"
                                        checked={isAlive}
                                        onChange={() => setIsAlive(true)}
                                    />
                                    <span className="ml-2">Жив</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        className="form-radio"
                                        checked={!isAlive}
                                        onChange={() => setIsAlive(false)}
                                    />
                                    <span className="ml-2">Умер</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Ассоциированные МО</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-sm p-1 text-sm"
                                placeholder="Введите информацию"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Асклепиус PID</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-sm p-1 text-sm"
                                placeholder="Введите PID"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientPage;
