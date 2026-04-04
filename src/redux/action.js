import { Add_To_Card, Remove_To_Card } from "./constant";

export const AddToCard = (item) => {
    return {
        type: Add_To_Card,
        data: item
    }
}

export const RemoveToCard = (item) => {
    return {
        type: Remove_To_Card,
        data: item
    }
}
