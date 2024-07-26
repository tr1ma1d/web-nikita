const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Замените на URL вашего фронтенда
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST /send
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Логирование полученных данных
    console.log('Received data:', { name, email, message });

    try {
        // Создание транспортера
        const transporter = nodemailer.createTransport({
            service: 'mail.ru',
            auth: {
                user: 'lalasket_mus@list.ru', // Используйте переменные окружения
                pass: 'G4xPwYSbYvyfHWyQx6M9',
            },
        });

        // Логирование перед отправкой письма
        console.log('Sending email...');
        console.log('From:', email);
        console.log('To: musatovla3xnikita@gmail.com');
        console.log('Subject:', `Message from ${name}`);
        console.log('Message:', message);

        const mailOptions = {
            from: 'lalasket_mus@list.ru',
            to: 'musatovla3xnikita@gmail.com',
            subject: `Message from ${name, email}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        // Ответ клиенту
        res.status(200).send('Email sent successfully');
    } catch (error) {
        // Логирование ошибки на сервере
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
