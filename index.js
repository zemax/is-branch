#!/usr/bin/env node

const branch = require( "current-git-branch" );

if ( process.argv.length < 3 ) {
	console.error( "Usage: is-git-branch <name>" );
	process.exit( 1 );
}

const desired = process.argv[ process.argv.length - 1 ].split( "," );

const current = branch();

if ( !current ) {
	console.error( "No a git repository" );
	process.exit( 1 );
}

if ( desired.indexOf( current ) < 0 ) {
	console.error(
		"Current branch '" +
		current +
		"' do not match desired branch '" +
		desired.join( ", " ) +
		"'"
	);
	process.exit( 1 );
}

console.log(
	"Current branch : " +
	current +
	"' match desired branch '" +
	desired.join( ", " ) +
	"'"
);
