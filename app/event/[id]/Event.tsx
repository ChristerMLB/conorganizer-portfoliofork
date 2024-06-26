'use client';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Box, Button, Card, CardActions } from '@mui/material';
// import { useAuth } from '@/components/AuthProvider';
import EditDialog from '@/components/EditDialog';
import EventBoundary from '@/components/ErrorBoundaries/EventBoundary';
import EventEnrolementList from '@/components/EventEnrolementList';
import EventUi from '@/components/EventUi';
import { useSingleEvents } from '@/lib/hooks/UseSingleEvent';
// import { useUserSettings } from '@/lib/hooks/UseUserSettings';

type Props = { id: string };
const Event = ({ id }: Props) => {
    const { event, loading } = useSingleEvents(id);
    // const user = useAuth();
    // const { userSettings } = useUserSettings(user?.uid);
    const showEditButton = false;
    const [openEdit, setOpenEdit] = useState(false);

    // useEffect(() => {
    //     setShowEditButton(userSettings?.admin && user ? true : false);
    // }, [user, userSettings]);

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const handleOpenEdit = () => {
        setOpenEdit(true);
    };
    // throw new Error(
    //     'lorem Ipsum error in conAuthor authorization dialog box - invalid Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quia in blanditiis mollitia exercitationem, asperiores nam quidem commodi nulla illum laborum, distinctio magnam debitis vitae rerum, maiores maxime sapiente! Quia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quia in blanditiis mollitia exercitationem, asperiores nam quidem commodi nulla illum laborum, distinctio magnam debitis vitae rerum, maiores maxime sapiente! Quia!'
    // );
    return (
        <Box
            sx={{
                maxWidth: '900px',
                margin: { xs: '0', md: '0 auto' },
                paddingBottom: '4rem',
                gap: '1rem',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {loading && <h1>Loading...</h1>}
            <EditDialog open={openEdit} handleClose={handleCloseEdit} conEvent={event} />
            <Card>
                <Button onClick={() => window.history.go(-1)} sx={{ zIndex: '9999' }}>
                    ← Tilbake
                </Button>
            </Card>
            <ErrorBoundary FallbackComponent={EventBoundary}>
                <EventUi conEvent={event} />
            </ErrorBoundary>
            <Box sx={showEditButton ? { display: 'block' } : { display: 'none' }}>
                <Card>
                    <CardActions>
                        <Button onClick={handleOpenEdit}>Endre</Button>
                    </CardActions>
                </Card>
                <EventEnrolementList id={id} />
            </Box>
        </Box>
    );
};

export default Event;
