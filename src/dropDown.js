export const DropdownStaff = () => {
    var [ allStaff, setStaff ] = useState()

    async function fetchData() {
        await fetch("http://localhost:4000/api/staff/")
        .then(response => response.json())
        .then(response => {
            setStaff(response);
        })
        .catch(err => setErrors(err))
    }
    

    useEffect(() => {
    fetchData();
    return () => {
        console.log('Cleaning time, ie unmounting')
    }
    }, []);

    return (
        <div>
            <select>
                <option disabled defaultValue selected>Select Name</option>
                <option> Is this working... </option>
            </select>
        </div>
    )

}

export default DropdownStaff
