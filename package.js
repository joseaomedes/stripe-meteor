Package.describe({
	summary: "Stripe.jsand Node-Stripe brought to Meteor. Update to mrgalaxy",
	version: "5.1.0",
	name: "jaomedes:stripe",
	git: "https://github.com/jaomedes/stripe-meteor.git"
});

Npm.depends({ "stripe": "5.1.0" });

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.on_test(function(api) {
	api.use(['tinytest','mrgalaxy:stripe']);
	api.add_files([ "tests/client.js", "tests/checkout.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});
