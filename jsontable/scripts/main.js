(function( $ ){
	'use strict';

	/**
	 * Validate JSON based on own conditions.
	 * @param {object} data JSON data object.
	 * @return {array} result Desired part of the data.
	 */
	function validateJSON(data) {
		if(parseInt(data.success)) {
			return data.result;
		} else {
			window.alert(data.message);
			return null;
		}
	}
	/**
	 * Filter table based on column index.
	 * @param {object} $table jQuery table object.
	 * @param {int} column Index of column to sort.
	 */
	function filterTable($table, column) {
		var rows = $table.find('tbody tr').get();

		rows.sort(function(a, b) {
			var A = $(a).children('td').eq(column)
						.text().toUpperCase();
			var B = $(b).children('td').eq(column)
						.text().toUpperCase();

			if(A < B) {
				return -1;
			}
			if(A > B) {
				return 1;
			}
			return 0;
		});

		$.each(rows, function(index, row) {
			$table.children('tbody').append(row);
		});
	}
	/**
	 * Add table event listeners.
	 * @param {object} $table jQuery table object.
	 */
	function addTableEvents($table) {
		$table.find('th').on('click', function() {
			var columnIndex = $(this).index();
			filterTable($table, columnIndex);
		});
	}
	/**
	 * Create HTML table from data array.
	 * @param {array} data Array with table data.
	 * @param {object} $container jQuery object to append table to.
	 */
	function createTable(data, $container) {
		var $table = $('<table>'),
			$thead = $('<thead>').appendTo($table),
			$tbody = $('<tbody>').appendTo($table);

		// array iteration
		$.each(data, function(index, object) {
			var $trow = $('<tr>');

			// single object iteration
			$.each(object, function(key, value) {
				var $th, $td;

				if(index === 0) {
					$th = $('<th>').text(key);
					$thead.append($th);
				}
				$td = $('<td>').text(value);
				$td.appendTo($trow);
			});

			$trow.appendTo($tbody);
		});

		$table.prependTo($container);
		addTableEvents($table);
	}
	/**
	 * Create a filterable HTML table from JSON.
	 * @param {string} path JSON file path.
	 * @param {object} $container jQuery element to append table to.
	 */
	function tableFromJSON(path, $container) {
		$.getJSON(path, function(data) {
			var tableData = validateJSON(data);
			if(tableData) {
				createTable(tableData, $container);
			}
		});
	}

	// init
	var JSONpath = 'test.json',
		$appendTo = $('body');
	tableFromJSON(JSONpath, $appendTo);

}(jQuery));