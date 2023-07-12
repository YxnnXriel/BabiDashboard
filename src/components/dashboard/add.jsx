import React, { useState } from 'react'

import "../styles/styles.css"

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
                    <h1>Sous Categorie</h1>
                    <h3 className='text-muted' >Choisissez la categorie qui sera rattacher à la nouvelle sous catégorie</h3>
                    {/* Nom et image des categories au clique , on recupere les informations de la categorie dans un useSate */}
                    <form action="" method="post">
                        <input type="text" name='Nom' placeholder='Nom de la sous categorie' />
                        <button type="submit">Ajouter</button>
                    </form>

                </div>
        )
    }

    const FormArticle = () => {

        //     class Product(models.Model):
        // Titre = models.CharField(max_length=200)
        // Description = models.TextField()
        // Prix = models.DecimalField(max_digits=10, decimal_places=2)
        // Category = models.ForeignKey('api.SubCategorie', on_delete=models.CASCADE)
        // Img = models.ImageField(upload_to='product_images/')
        // created_at = models.DateTimeField(auto_now_add=True)
        // updated_at = models.DateTimeField(auto_now=True)

        // def __str__(self):
        //     return self.Titre


        return (
                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                }}>
                    <h1>Article</h1>
                    <h3 className='text-muted' >Ajouter un nouvelle Article</h3>
                    <form action="" method="post">
                        <input type="text" placeholder='Titre' />
                        <input type="text" placeholder='Description' />
                        <input type="text" placeholder='Prix' />
                        <input type="text" placeholder='Sous Category' />
                        <input type="file" placeholder='Img' />
                    </form>

                </div>

        )
    }

    return (
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
                backgroundColor: '#fff',
                borderRadius: '2rem',
                padding: "2rem",
                
            }}>
                {activeForm === 'categorie' && <FormCategorie />}
                {activeForm === 'subcategorie' && <FormSubCategorie />}
                {activeForm === 'article' && <FormArticle />}
            </div>

        </main>
    )
}

export default Add
