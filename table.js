$(document).ready(function () {
  $(`#add_row_female`).hide();
  $(`#tbody_female`).hide();

  function updateSr_num_male() {
    $("#tbody_male tr").each(function (index) {
      $(this)
        .find(".sr_num_male")
        .text(index + 1);
    });
  }

  function updateSr_num_female() {
    $("#tbody_female tr").each(function (index) {
      $(this)
        .find(".sr_num_female")
        .text(index + 1);
    });
  }

  $(`#gender1`).change(function () {
    var gender = $(this).val();

    if (gender === `FEMALE`) {
      $(`#tbody_male`).hide();
      $(`#add_row_male`).hide();
      $(`#tbody_female`).fadeIn(1);
      $(`#add_row_female`).fadeIn(1);
    }

    if (gender === `MALE`) {
      $(`#tbody_male`).fadeIn(1);
      $(`#add_row_male`).fadeIn(1);
      $(`#tbody_female`).hide();
      $(`#add_row_female`).hide();
    }
  });

  $(document).on(`click`, `.delete_btn_male`, function () {
    const row_to_be_deleted_male = $(this).closest(`tr`);
    $(`#alert`).css(`display`, `flex`);
    const name_of_person =row_to_be_deleted_male.find(`.name_of_person_class`).text();
    $(`#name_display`).text(`Are you sure you want to delete ${name_of_person}'s record?`);
    
    $(`#okbtn`).off(`click`).on(`click`, function () { 
        row_to_be_deleted_male.remove();
        $(`#alert`).css(`display`, `none`);
        updateSr_num_male();
    });

    $(`#cancelbtn`).off(`click`).on(`click`, function () { 
        $(`#alert`).css(`display`, `none`);
        row_to_be_deleted_male.val('0');
    });
});


  $(document).on(`click`, `.delete_btn_female`, function () {
    const row_to_be_deleted_female = $(this).closest(`tr`);
    const name_of_person =row_to_be_deleted_female.find(`.name_of_person_class`).text();
    $(`#name_display`).text(`Are you sure you want to delete ${name_of_person}'s record?`);
    
    $(`#alert`).css(`display`, `flex`);

    $(`#okbtn`).off(`click`).on(`click`, function(){
      row_to_be_deleted_female.remove();
      $(`#alert`).css(`display`, `none`);
      updateSr_num_female();
    });

    $(`#cancelbtn`).off(`click`).on(`click` ,function () {
      $(`#alert`).css(`display`, `none`);
      row_to_be_deleted_female.val('0');
    });
  });

  $(`#add_row_male`).click(function () {
    $(`#tbody_male`).append(`
            <tr>
                <th class="sr_num_male" scope="row"></th>
                <td contenteditable="true" class="name_of_person_class"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td><button contenteditable="false" class="btn btn-danger delete_btn_male" readonly>Delete</button></td>
            </tr>`);
    updateSr_num_male();
  });

  $(`#add_row_female`).click(function () {
    $(`#tbody_female`).append(`
            <tr>
                <th class="sr_num_female" scope="row"></th>
                <td contenteditable="true" class="name_of_person_class"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td><button contenteditable="false" class="btn btn-danger delete_btn_female" readonly>Delete</button></td>
            </tr>`);
    updateSr_num_female();
  });
});
