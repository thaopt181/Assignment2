const mongoose = require('mongoose');
const { Schema, SchemaTypes, model } = mongoose;

const loanSchema = new Schema({
    member_id: {
        type: SchemaTypes.ObjectId,
        ref: "Member",
        required: true
    },
    items: [{
        book_id: {
            type: SchemaTypes.ObjectId,
            ref: "Book",
            required: true
        },
        quantity: { type: Number, min: 1, required: true }
    }],
    borrowDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: { type: Date, default: null },
    status: {
        type: String,
        enum: ["Borrowing", "Returned", "Overdue"],
        default: "Borrowing"
    }
}, { 
    timestamps: true 
});

const Loan = model('Loan', loanSchema);
module.exports = Loan;