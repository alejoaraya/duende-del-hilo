import { validateBill, validateParcialBill } from '../schemas/billSchema.js'
import { jsonProcess } from "../utils/funciones.js"

export class BillController {
    constructor({ billModel }) {
        this.billModel = billModel
    }

    getAll = async (req, res) => {
        const { error, message, codigo } = await this.billModel.getAll()
        if (error === true) res.status(codigo).json({ error: error, message: message })

        let bills = message
        const { billNumber, idUser } = req.query

        if (billNumber){
            bills = bills.filter(
                bill => bill.billNumber === parseInt(billNumber)
            )
        }

        if(idUser) {
            bills = bills.filter(
                bill => bill.idUser.includes(idUser)
            )
        }

        res.status(200).json(bills)

    }

    getById = async (req, res) => {
        const { id } = req.params
        const { error, message, codigo } = await this.billModel.getById({ id })

        if (error === true) {
            res.status(codigo).json({ error: error, message: message })
        } else {
            res.status(200).json(message)
        }
    }

    create = async (req, res) => {

        const result = validateBill(req.body)

        if (!result.success) {
            const messageError = jsonProcess(JSON.parse(result.error.message))
            return res.status(422).json({ error: true, message: messageError })
        }

        const { error, message, codigo } = await this.billModel.create({ input: result.data })

        if (error === true) res.status(codigo).json({ error: error, message: message })

        res.status(201).json(message)
    }

    delete = async (req, res) => {
        const { id } = req.params

        const { error, message, codigo } = await this.billModel.delete({ id })

        if (error === true) {
            return res.status(codigo).json({ error: error, message: message })
        }

        return res.json(message)
    }

    update = async (req, res) => {
        const result = validateParcialBill(req.body)

        if (!result.success) {
            const messageError = jsonProcess(JSON.parse(result.error.message))
            return res.status(400).json({ error: true, message: messageError })
        }

        const { id } = req.params

        const { error, message, codigo } = await this.billModel.update({ id, input: result.data })

        if (error === true) {
            return res.status(codigo).json({ error: true, message: message })
        }

        return res.json(message)
    }

    logicDelete = async (req, res) => {
        const { id } = req.params

        const { error, message, codigo } = await this.billModel.logicDelete({ id })

        if (error === true) {
            return res.status(codigo).json({ error: error, message: message })
        }

        return res.json(message)
    }
}