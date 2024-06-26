import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

type SimpleDialogProps = {
  onClose: () => void;
  open: boolean;
  workouts: any;
};

const SimpleDialog = ({ onClose, open, workouts }: SimpleDialogProps) => {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (workout: any) => {
    navigate(`/tracker/workout/${workout.workout_id}`);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}
    maxWidth={"sm"}>
      <DialogTitle>Select a Workout</DialogTitle>
      <List sx={{ pt: 0 }}>
        {workouts?.map((workout: any) => (
          <ListItem disableGutters key={workout.workout_id}>
            <ListItemButton onClick={() => handleListItemClick(workout)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <FitnessCenterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={workout.workout_name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => navigate("/create-routine")}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add Routine" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
