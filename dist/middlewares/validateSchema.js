function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            var errorMessages = error.details.map(function (err) { return err.message; });
            return res.status(422).send(errorMessages);
        }
        next();
    };
}
export default validateSchema;
