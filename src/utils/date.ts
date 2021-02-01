import { format } from "date-fns"
import ptBr from 'date-fns/locale/pt-BR'

export function formatDate(date: string) {
    const transform = new Date(date)
    const parsed = format(transform, "dd' de 'MMMM' de 'yyyy", { locale: ptBr })
    return parsed
}