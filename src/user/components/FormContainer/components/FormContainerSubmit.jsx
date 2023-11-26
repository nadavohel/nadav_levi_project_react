import Button from '@mui/material/Button';
import { useContext } from 'react';
import { GeneralContext } from '../../../../App';

export default function FormContainerSubmit({ children }) {
    const { isFormValid } = useContext(GeneralContext);

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isFormValid}
            sx={{ mt: 3, mb: 2 }}
            className='linkButton'
        >
            {children}
        </Button>
    );
}