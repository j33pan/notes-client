export function handleErr(err) {
  let msg = err.toString();
  if (!(err instanceof Error) && err.message) msg = err.message;
  alert(msg);
}
