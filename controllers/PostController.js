import Post from "../models/Post.js";
import path from 'path';
import fs from 'fs';


const __dirname = path.resolve();

//pagina principal
// export const index = async (req, res) => {
//     res.render('index');
// }

// Obtener Posteos cargados
export const getPosts = async(req, res) => {
    try {
        const response = await Post.findAll();
        res.render('astrologia', { posts: response});
        //res.json(response);
        //res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

//Obtener un post en particular
export const getPostById = async (req, res) => {
    try {
        const response = await Post.findOne({
            where : {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
// guardar posts
export const savePost = (req, res) => {
    if(req.files === null) return res.status(400).json({msg: "No Posts Uploaded"});
    const title = req.body.title;
    const autor = req.body.autor;
    const text = req.body.text;
    const date = req.body.date;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];

    if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Image"});
    if(fileSize > 10000000) return res.status(422).json({msg: "Image must be less then 10 MB"});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Post.create({title: title, text: text, autor: autor, date: date, image: fileName, url: url});
            //res.status(201).json({msg: "Post created successfully"});
            //res.redirect('/Admin');
            res.redirect('/Admin?msg=Post+created+successfully');
        } catch (error) {
            console.log(error.message);
        }
    })
}

//Actualizar post
// export const updatePost = async(req, res) => {
//     const post = await Post.findOne({
//         where: {
//             id : req.params.id
//         }
//     });
//     if(!post) return res.status(404).json({msg: "No Data Found"});
//     let fileName = "";
//     if(req.files === null) {
//         fileName = Post.image;
//     } else {
//         const file = req.files.file;
//         const fileSize = file.data.length;
//         const ext = path.extname(file.name);
//         fileName = file.md5 + ext;
//         const allowedType = ['.png', '.jpg', '.jpeg'];

//         if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
//         if(fileSize > 10000000) return res.status(422).json({msg:"Image must be less than 5 MB"});

//         const filepath = `./public/images/${post.image}`;
//         fs.unlinkSync(filepath);

//         file.mv(`./public/images/${fileName}`, (err)=>{
//             if(err) return res.status(500).json({msg: err.message});
//         });
//     }
//     //const name = req.body.title;
//     const title = req.body.title;
//     const autor = req.body.autor;
//     const text = req.body.text;
//     const date = req.body.date;
//     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//     try {
//         await Post.update({title: title, image: fileName, url: url, autor: autor, text: text, date: date}, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Product Updated Successfuly"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }


export const updatePost = async (req, res) => {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!post) {
      return res.status(404).json({ msg: "No Data Found" });
    }
  
    let fileName = post.image;
  
    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];
  
      if (!allowedType.includes(ext.toLocaleLowerCase())) {
        return res.status(422).json({ msg: "Invalid Images" });
      }
      if (fileSize > 10000000) {
        return res.status(422).json({ msg: "Image must be less than 5 MB" });
      }
  
      const filepath = `./public/images/${fileName}`;
      fs.unlinkSync(filepath);
  
      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
      });
    }
  
    const title = req.body.title;
    const autor = req.body.autor;
    const text = req.body.text;
    const date = req.body.date;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  
    try {
      await Post.update(
        {
          title: title,
          image: fileName,
          url: url,
          autor: autor,
          text: text,
          date: date,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
  
      //return res.status(200).json({ msg: "Post updated successfully" });
      res.redirect('/Admin?msg=Post+Update+successfully');
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  };
//Borrar post
export const deletePost = async(req, res) => {
    const post = await Post.findOne({
        where:{
            id: req.params.id
        }
    });
    if(!post) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${post.image}`;
        fs.unlinkSync(filepath);
        await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Post Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}