import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  confirmBtn: string;
  cancelBtn: string;
};

function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  confirmBtn,
  cancelBtn,
}: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="secondary">
          {confirmBtn}
        </Button>
        <Button onClick={onClose} autoFocus>
          {cancelBtn}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;
