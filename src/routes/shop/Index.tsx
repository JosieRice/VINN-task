import useAxios from 'utils/useAxios';

interface Data {
    available: boolean;
    battery_size: null;
    body_type_id: number | null;
    charging_speed: null;
    created_at: string;
    cylinder: null;
    dealership: {
        address: {
            city: string;
            country: string;
            google_place_id: string;
            id: number;
            latitude: string;
            longitude: string;
            postal_code: string;
            province: string;
            street: string;
            timezone: string;
        };
    };
    dealership_id: number;
    description: string;
    documentation_fee: string;
    doors: number;
    drive_type_id: number;
    engine_size: string;
    exterior_colour_id: number;
    fuel_type_id: number | null;
    id: string;
    interior_colour_id: null;
    kilometers: string;
    make: { id: number; name: string; image_url: null };
    model: { id: number; name: string; make_id: number };
    model_id: number;
    options: string[];
    passenger: null;
    price: string | null;
    range: null;
    rank: number;
    scraped_at: string;
    status: 'Used' | 'New';
    stock_number: string;
    transmission_id: number;
    trim: string | null;
    updated_at: string;
    vin: string | null;
    year: number;
}

const Index = () => {
    console.log("Index start")
    const { loading, error, data }: { loading: boolean; error: string; data: Data } = useAxios({
        method: 'get',
        url: `https://www.vinnauto.com/api/vehicles/im_feeling_lucky`,
    });

    if (loading) return <div>loading</div>;

    console.log(data);

    return (
        <>
            <h1>
                {data.year} {data.make.name} {data.model.name}
            </h1>
        </>
    );
};

export default Index;
