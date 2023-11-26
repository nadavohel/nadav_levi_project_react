import DisplayBox from "./components/DisplayBox";

export default function DisplayMoment() {

    return (
        <div className="centerDisplay">
            <div className="boxContainer">
                <DisplayBox name='cards'/>
                <DisplayBox name='table'/>
                <DisplayBox name='accordion'/>
            </div>
        </div>
    );
}