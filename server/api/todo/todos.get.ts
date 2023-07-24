interface todo {
    id: number
    task: string
}
const todos:todo[] = [
    {
        id: 1,
        task: "bring Milk"
    },
    {
        id: 2,
        task: "take bunty to walk"
    }
]

export default defineEventHandler((event) => {
    return todos
})