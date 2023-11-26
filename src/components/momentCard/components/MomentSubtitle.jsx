import { CardContent, Typography } from "@mui/material";

export default function MomentSubtitle(props) {

    return (
        <>
            <CardContent>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    <span>{props.moment.subtitle}</span>
                </Typography>
            </CardContent>
        </>

    )
}