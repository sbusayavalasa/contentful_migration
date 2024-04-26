module.exports = function (migration) {
    // Create a new category field in the blog post content type.
    console.log("im here");
    const contentType = migration.editContentType('product');
    contentType.createField('test')
      .name('Test')
      .type('Symbol');
}
