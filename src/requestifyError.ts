class RequestifyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RequestifyError";
  }
}
export default RequestifyError;
