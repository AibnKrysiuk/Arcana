import path from 'path';
const __dirname = path.resolve();


export const experiencia = async (req, res) => {
    res.render('experiencia');
}

export const preparativos = async (req, res) => {
    res.render('preparativos');
}