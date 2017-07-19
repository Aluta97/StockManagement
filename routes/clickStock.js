exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from clinic_stock', [], function(err, results) {
        if (err) return next(err);
		res.render( 'clinic_stock', {
				clinic_stock : results
		});
      });
	});
};
