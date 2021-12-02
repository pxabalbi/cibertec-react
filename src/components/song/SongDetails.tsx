import { Track } from "../../data/tracks";

type Props = {
    track: Track
}

export default function SongDetails({ track }: Props): JSX.Element {
    return <div>
        <h2>{track.name}</h2>
        <dl>
            <dt>Composer</dt>
            <dd>{track.composer || "No ingresado"}</dd>
        </dl>
    </div>
}