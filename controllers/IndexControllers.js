import path from 'path';
const __dirname = path.resolve();


export const index = async (req, res) => {
    res.render('index');
}

export const contacto = async (req, res) => {
    res.render('contacto');
}