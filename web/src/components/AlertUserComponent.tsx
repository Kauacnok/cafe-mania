import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface AlertUserComponentProps {
	title: string,
	classNameStyleButton: string,
}

export function AlertUserComponent({ title, classNameStyleButton }: AlertUserComponentProps ) {
	return (
		<>
			<AlertDialog.Root>
				<AlertDialog.Trigger asChild>
					<button className={classNameStyleButton}>{title}</button>
				</AlertDialog.Trigger>
				<AlertDialog.Portal>
					<AlertDialog.Overlay className="AlertDialogOverlay" />
						<AlertDialog.Content className="AlertDialogContent">
							<AlertDialog.Title className="AlertDialogTitle">Aviso</AlertDialog.Title>
								<AlertDialog.Description className="AlertDialogDescription">
									Está função ainda não está implementada
								</AlertDialog.Description>
								<div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
									<AlertDialog.Cancel asChild>
										<button className="button-close">Fechar</button>
									</AlertDialog.Cancel>
								</div>
						</AlertDialog.Content>
					</AlertDialog.Portal>

			</AlertDialog.Root>
		</>
	)
}