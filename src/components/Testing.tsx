import CardSwap, { Card } from "./ui/CardSwap"

const Testing = () => {
    return (
        <div className="bg-black" style={{ height: '600px', position: 'relative' }}>
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
            >
                <Card>
                    <h3>Card 1</h3>
                    <p>Your content here</p>
                </Card>
                <Card className="bg-blue-500 text-white">
                    <h3>Card 2</h3>
                    <p>Your content here</p>
                </Card>
                <Card>
                    <h3>Card 3</h3>
                    <p>Your content here</p>
                </Card>
            </CardSwap>
        </div>
    )
}

export default Testing




