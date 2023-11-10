
export async function apiTest() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data1 = data.json()
    console.log(data1)

    const return_data = [data1]

    return return_data


}