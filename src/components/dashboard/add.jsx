import React, { useState } from 'react'
import AdutAkech from "../../images/adut akech.jpeg"
import "../styles/styles.css"
import axios from 'axios'

const Add = () => {
    const [activeForm, setActiveForm] = useState('')

    const handleOnClick = (form) => {
        setActiveForm(form)
        console.log('form: ', form)
    }

    const FormCategorie = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1>Categorie</h1>
                <h3 className='text-muted' >Entrer juste le Nom de la nouvelle Categorie ainsi qu'une image pour cette categorie</h3>
                <h3 className='text-muted'>Une image est rataché pour chaque categorie pour un aperçu à la previsualisation</h3>
                <form action="" method="post">
                    <input type="text" name="Nom" id="" placeholder='Nom de la categorie' />
                    <input type="file" name="Img" id="" />
                    <button type="submit">Ajouter</button>
                </form>

            </div>
        )
    }

    const FormSubCategorie = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1 style={{ color: '#7380ec' }}> Sous Categorie</h1>
                <h3 className='text-muted' >Choisissez la categorie qui sera rattacher à la nouvelle sous catégorie</h3>
                {/* Nom et image des categories au clique , on recupere les informations de la categorie dans un useSate */}
                <form action="" method="post" style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder='Nom de la sous catégorie' style={{
                        background: '#f9fafb',
                        fontSize: '0.875rem',
                        borderColor: '#c0c4c9',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                        boxShadow: 'none',
                        borderRadius: '0.25rem',
                        borderBottomWidth: '2px',
                        color: '#20242f',
                        width: '100%',
                        padding: '0.75rem',
                        height: '2.75rem',
                        lineHeight: 'normal',
                        appearance: 'none',
                        marginTop: 20,
                        marginBottom: 5,
                    }} />

                    <input type="file" placeholder='Img' style={{
                        marginTop: 10,
                        marginBottom: 5
                    }} />
                    <button type='submit' style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 25,
                        paddingRight: 25,
                        width: '20%',
                        borderRadius: 5,
                        backgroundColor: "#7380ec",
                        color: "#fff",
                        fontSize: "14px",
                        marginTop: 15
                    }}>Ajouter</button>
                </form>

            </div>
        )
    }

    const FormArticle = () => {
        

        const [Titre, SetTitre] = React.useState('')
        const [Description, SetDescription] = React.useState('')
        const [Prix, SetPrix] = React.useState('')
        const [Category, SetCategory] = React.useState('')
        const [Img, SetImg] = React.useState('')

        const Handle = (e, func) => {
            func(e.target.value)
        }

        const HandleFileChange = (file) => {
            // Faites ce que vous voulez avec le fichier ici
            console.log(file);
            // Vous pouvez le stocker dans l'état si nécessaire
            SetImg(file);
        };

        const onSubmit = async (e) => {
            e.preventDefault();
            alert(Titre + ' ' + Description + " " + Prix + "  " + Category + " . " + Img)

            const formData = new FormData();
            formData.append('Titre', Titre);
            formData.append('Description', Description);
            formData.append('Prix', Prix);
            formData.append('Category', Number(Category));
            formData.append('Img', Img);

            await axios.post('http://127.0.0.1:8000/api/admin/product/', formData)
                .then(() => alert('saved successfully'))
                .catch((error) => {
                    console.error(error);
                });
        };

        
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <h1 style={{ color: '#7380ec' }}>Article</h1>
                <h3 className='text-muted'  >Ajouter un nouvelle Article</h3>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmit} >
                    <input id="Titre" type="text" placeholder='Titre' value={Titre} onChange={(e) => Handle(e, SetTitre)} style={{
                        background: '#f9fafb',
                        fontSize: '0.875rem',
                        borderColor: '#c0c4c9',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                        boxShadow: 'none',
                        borderRadius: '0.25rem',
                        borderBottomWidth: '2px',
                        color: '#20242f',
                        width: '100%',
                        padding: '0.75rem',
                        height: '2.75rem',
                        lineHeight: 'normal',
                        appearance: 'none',
                        marginTop: 10,
                        marginBottom: 5,
                    }} />
                    <input id="description" type="text" placeholder='Description' name='Description' value={Description} onChange={(e) => Handle(e, SetDescription)} style={{
                        background: '#f9fafb',
                        fontSize: '0.875rem',
                        borderColor: '#c0c4c9',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                        boxShadow: 'none',
                        borderRadius: '0.25rem',
                        borderBottomWidth: '2px',
                        color: '#20242f',
                        width: '100%',
                        padding: '0.75rem',
                        height: '2.75rem',
                        lineHeight: 'normal',
                        appearance: 'none',
                        marginTop: 5,
                        marginBottom: 5,
                    }} />
                    <input id="prix" type="text" placeholder='Prix' name='Prix' value={Prix} onChange={(e) => Handle(e, SetPrix)} style={{
                        background: '#f9fafb',
                        fontSize: '0.875rem',
                        borderColor: '#c0c4c9',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                        boxShadow: 'none',
                        borderRadius: '0.25rem',
                        borderBottomWidth: '2px',
                        color: '#20242f',
                        width: '100%',
                        padding: '0.75rem',
                        height: '2.75rem',
                        lineHeight: 'normal',
                        appearance: 'none',
                        marginTop: 5,
                        marginBottom: 5,
                    }} />
                    <input id="category" type="text" placeholder='Sous Category' name='Category' value={Category} onChange={(e) => Handle(e, SetCategory)} style={{
                        background: '#f9fafb',
                        fontSize: '0.875rem',
                        borderColor: '#c0c4c9',
                        borderWidth: '1px',
                        borderStyle: 'solid',

                        boxShadow: 'none',
                        borderRadius: '0.25rem',
                        borderBottomWidth: '2px',
                        color: '#20242f',
                        width: '100%',
                        padding: '0.75rem',
                        height: '2.75rem',
                        lineHeight: 'normal',
                        appearance: 'none',
                        marginTop: 5,
                        marginBottom: 5,
                    }} />
                    <input
                        type="file"
                        placeholder="Img"
                        name="Img"
                        onChange={(e) => HandleFileChange(e.target.files[0])}
                        style={{
                            marginTop: 5,
                            marginBottom: 5
                        }}
                    />

                    <button type='submit' style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 25,
                        paddingRight: 25,
                        width: '20%',
                        borderRadius: 5,
                        backgroundColor: "#7380ec",
                        color: "#fff",
                        fontSize: "14px",
                        marginTop: 15
                    }}>Ajouter</button>
                </form>

            </div>

        )
    }

    return (
        <>
            <main>
                <div class="insights">
                    <div class="sales" style={{ textAlign: 'center' }} onClick={() => handleOnClick('categorie')}>
                        <span class="material-icons-sharp">analytics</span>
                        <h3>Categorie</h3>
                        <small class="text-muted" >Crée une nouvelle catégorie pour le site </small>
                    </div>
                    <div class="sales" style={{ textAlign: 'center' }} onClick={() => handleOnClick('subcategorie')}>
                        <span class="material-icons-sharp">analytics</span>
                        <h3>Sous Categorie</h3>
                        <small class="text-muted" >Crée une sous categorie pour la categorie de votre choix</small>
                    </div>
                    <div class="sales" style={{ textAlign: 'center' }} onClick={() => handleOnClick('article')}>
                        <span class="material-icons-sharp">analytics</span>
                        <h3>Article</h3>
                        <small class="text-muted" >Crée un nouvel article à vendre </small>
                    </div>
                </div>

                <div class="recent-orders" style={{
                    backgroundColor: activeForm && "#fff",
                    borderRadius: '2rem',
                    padding: "2rem",

                }}>
                    {activeForm === 'categorie' && <FormCategorie />}
                    {activeForm === 'subcategorie' && <FormSubCategorie />}
                    {activeForm === 'article' && <FormArticle />}
                </div>

            </main>
            <div class="right">

                <div class="top">
                    <button id="menu-btn" >
                        <span class="material-icons-sharp">menu</span>
                    </button>
                    <div class="theme-toggler">
                        <span class="material-icons-sharp active">light_mode</span>
                        <span class="material-icons-sharp">dark_mode</span>
                    </div>
                    <div class="profile">
                        <p>Hey, <b>Ariel</b></p>
                        <small class="text-muted" >Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src={AdutAkech} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Add
