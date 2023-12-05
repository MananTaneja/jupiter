export async function getData() {
    const response = await fetch('https://reqres.in/api/users?page=1')
    const json = await response.json()
    console.log(json)
    return json
}