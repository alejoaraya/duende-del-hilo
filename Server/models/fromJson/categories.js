import { randomUUID } from 'node:crypto'
import fs from 'node:fs'

async function allCategories() {
    try {
        const data = await fs.readFileSync('./dbs/categories.json', 'utf-8')

        if(data){
            const categories = JSON.parse(data)
            return categories
        } else {
            return []
        }

    } catch (error) {
        return { message: error.message }
    }
}

async function saveAllCategories(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2)

        await fs.writeFileSync('./dbs/categories.json', jsonData, 'utf-8')

        return { error: false, messageSave: null }        
    } catch (error) {
        return { error: true, message: error.message }
    }
}

export class CategoryModel {
    static async getAll() {
        const categories = await allCategories()
        return categories
    }

    static async getById({ id }) {
        const categories = await allCategories()

        const category = categories.find(category => category.id == id)
        if (category) return { error: false, message: category }

        return { error: true, message: 'Categoria no encontrado' }
    }

    static async create({ input }) {
        const newCategory = {
            id: randomUUID(),
            ...input
        }

        const categories = await allCategories()

        if(categories){
            categories.push(newCategory)
        } else {
            categories = [newCategory]
        }


        const { error, messageSave } = saveAllCategories(categories)

        if (error === true) return { error: true, message: messageSave }

        return { error: false, message: newCategory }

    }

    static async delete({ id }) {
        const categories = await allCategories()

        const categoryAEliminar = categories.filter(category => category.id === id)
        
        if(categoryAEliminar.length===0) {
            return {error: true, message:"Id no encontrado"}
        } else {
            const newCategories = categories.filter(category => category.id !== id)
            const { error, messageSave } = await saveAllCategories(newCategories)
            if (error === true) return { error: true, message: messageSave }
            return {error: false, message: categoryAEliminar[0]}
        }
    }

    static async update({ id, input }) {
        const categories = await allCategories()

        const categoryIndex = categories.findIndex(category => category.id === id)
        if (categoryIndex === -1) return {error: true, message:"Id no encontrado"}

        categories[categoryIndex] = {
            ...categories[categoryIndex],
            ...input
        }

        const { error, messageSave } = await saveAllCategories(categories)
        if (error === true) return { error: true, message: messageSave }
        
        return {error: false, message:categories[categoryIndex]}
    }
}
