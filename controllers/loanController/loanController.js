const Loan = require('../../models/loans/loanModel');
//*
const getAll = async (req, res) => {
    try {
        const data = await Loan.find()

            .populate('member_id', 'fullName email phone') 
            .populate('items.book_id', 'title author category'); 
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const data = await Loan.findById(req.params.id)
            .populate('member_id', 'fullName email phone')
            .populate('items.book_id', 'title author category');
            
        if (!data) return res.status(404).json({ message: 'Không tìm thấy!' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const newData = await Loan.create(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getByMemberId = async (req, res) => {
    try {
        const data = await Loan.find({ member_id: req.params.memberId })
            .populate('member_id', 'fullName email')
            .populate('items.book_id', 'title');
            
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAll, getById, create, getByMemberId };