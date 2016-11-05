/* global jake, desc, task, async, complete, fail  */

(function() {
  "use strict";

  var jshint = require("simplebuild-jshint");
  var nodeunit = require("nodeunit");

  desc("Default");
  task("default", [ "lint", "nodeTest" ], function() {
    console.log("\nBUILD OK");
  });

  desc("Lint Javascript");
  task("lint", function() {
    process.stdout.write("Linting javascript: ");

    var files = new jake.FileList();
    files.include("Jakefile.js");
    files.include("src/**/*.js");
    files.include("public/**/*.js");
    files.exclude("vendors");

    jshint.checkFiles({
      files: files.toArray(),
      options: lintOptions(),
      globals: globalsOptions()
    }, complete, fail);

  }, { async: true });

  desc("Run Node Unit");
  task("nodeTest", function() {
    process.stdout.write("Node Unit Testing: ");

    var files = new jake.FileList();
    files.include("test/server/**/*.js");

    var reporter = require("nodeunit").reporters["default"];
    reporter.run(files.toArray(), null, function(err) {
      if (err) fail("Node Unit Test Fail!");
      complete();
    });

  }, { async: true });

  function lintOptions() {
    return {
      bitwise: true,
      eqeqeq: true,
      forin: true,
      freeze: true,
      futurehostile: true,
      latedef: "nofunc",
      noarg: true,
      nocomma: true,
      nonbsp: true,
      nonew: true,
      strict: true,
      undef: true,
      node: true,
      browser: true
    };
  }

  function globalsOptions() {
    return {
      describe: false,
      it: false,
      before: false,
      after: false,
      beforeEach: false,
      afterEach: false,
      $: false
    };
  }



}());