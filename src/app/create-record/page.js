'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const PrimaryExaminationPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstVisitDate: '',
        previousMedicalHelp: '',
        diagnosisVerified: '',
        ageAtDiagnosis: '',
        sex: '',
        height: '',
        weight: '',
        bmi: '',
        clinicalSymptoms: [],
        ecogStatus: '',
        karnofskyIndex: '',
        cancerComplications: '',
        smokingHistory: '',
        alcoholConsumption: '',
        spicyFood: '',
        previousSurgeries: '',
        comorbidities: [],
        infectiousDiseases: ''
    });

    useEffect(() => {
        // Получаем ID записи из localStorage
        const selectedRecordId = localStorage.getItem('selectedRecordId');
        // Используем ID записи по необходимости
        console.log('Selected Record ID:', selectedRecordId);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBMIChange = () => {
        if (formData.height && formData.weight) {
            const bmiValue = (formData.weight / (formData.height / 100) ** 2).toFixed(2);
            setFormData({ ...formData, bmi: bmiValue });
        }
    };

    const generateDocx = () => {
        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Первичное обследование',
                                    bold: true,
                                    size: 32,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Дата первичного обращения: ${formData.firstVisitDate}`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Обращался ли ранее за мед. помощью: ${formData.previousMedicalHelp === 'yes' ? 'Да' : 'Нет'}`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Диагноз верифицирован морфологически: ${formData.diagnosisVerified === 'yes' ? 'Да' : 'Нет'}`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Возраст на момент подтверждения диагноза: ${formData.ageAtDiagnosis} лет`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Пол: ${formData.sex === 'male' ? 'Мужской' : 'Женский'}`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Рост: ${formData.height} см`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Вес: ${formData.weight} кг`),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun(`Индекс массы тела (ИМТ): ${formData.bmi}`),
                            ],
                        }),
                        // Добавь другие поля по аналогии
                    ],
                },
            ],
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, `Обследование_${formData.firstVisitDate}.docx`);
        });
    };

    const handleSaveAndRedirect = () => {
        // Сохранение записи в localStorage
        const existingRecords = JSON.parse(localStorage.getItem('patientRecords')) || [];
        const newRecord = { ...formData, id: Date.now() }; // Уникальный ID записи
        const updatedRecords = [...existingRecords, newRecord];

        localStorage.setItem('patientRecords', JSON.stringify(updatedRecords));

        // Генерация документа и скачивание
        generateDocx();

        // Редирект на страницу пациента
        router.push(`/patient/${params.id}`);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h2 className="text-xl font-bold">Пациенты: № амбулаторной карты, Имя, Фамилия</h2>
            <h3 className="text-lg font-semibold">НОВАЯ ЗАПИСЬ: Первичное обследование</h3>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Дата первичного обращения</label>
                <input
                    type="date"
                    name="firstVisitDate"
                    value={formData.firstVisitDate}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    required
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Обращался ли ранее за мед. помощью</label>
                <select
                    name="previousMedicalHelp"
                    value={formData.previousMedicalHelp}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                >
                    <option value="">Выберите</option>
                    <option value="no">Нет</option>
                    <option value="yes">Да</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Диагноз верифицирован морфологически</label>
                <select
                    name="diagnosisVerified"
                    value={formData.diagnosisVerified}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                >
                    <option value="">Выберите</option>
                    <option value="no">Нет</option>
                    <option value="yes">Да</option>
                </select>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Возраст на момент подтверждения диагноза</label>
                <input
                    type="number"
                    name="ageAtDiagnosis"
                    value={formData.ageAtDiagnosis}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Пол</label>
                <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                >
                    <option value="">Выберите</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold">Рост (см)</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        onBlur={handleBMIChange}
                        className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Вес (кг)</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        onBlur={handleBMIChange}
                        className="border border-gray-300 rounded-md p-2 mt-1 w-full"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-semibold">Индекс массы тела (ИМТ)</label>
                <input
                    type="text"
                    value={formData.bmi}
                    readOnly
                    className="border border-gray-300 rounded-md p-2 mt-1 w-full bg-gray-100"
                />
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    onClick={handleSaveAndRedirect}
                    className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
                >
                    Сохранить запись
                </button>
                <button
                    onClick={() => router.push(`/patient/${params.id}`)}
                    className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700"
                >
                    Отменить
                </button>
            </div>
        </div>
    );
};

export default PrimaryExaminationPage;
